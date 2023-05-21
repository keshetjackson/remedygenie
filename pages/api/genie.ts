    import { NextApiRequest, NextApiResponse } from "next";
    import { Configuration,OpenAIApi } from "openai";
    import dotenv from 'dotenv';
    dotenv.config();

    type ResponseData ={
        text: string;
    }

    type MessageRole = 'system' | 'user' | 'assistant';

    interface Message {
        role: MessageRole;
        content: string;
    }

    interface RequestBody {
        messages: Message[];
    }

    interface GenerateNextApiRequest extends NextApiRequest {
        body: RequestBody;
    }


    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    export default async function handler(
        req: GenerateNextApiRequest,
        res: NextApiResponse<ResponseData>
    ) {
       
        const { messages } = req.body;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages
        })

        const response : string = completion.data.choices[0].message?.content as string;
        console.log(messages);
        res.status(200).json({text : response});
    }

