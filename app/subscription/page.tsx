"use client"
import React from "react";
import { store } from "../redux/store";
import { updateDoc } from "firebase/firestore";

const Page = () => {

    const handleSubscribe = async() => {
        const docref = store.getState().auth.user?.dbDocRef;
        await updateDoc(docref, {
            isSubscribed: true
        })
    }

    return (
        <>
        <button onClick={handleSubscribe}>subscribe</button>
        </>
    )
}

export default Page;