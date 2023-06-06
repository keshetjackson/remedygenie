"use client"
import React from "react";
import { store } from "../redux/store";
import { updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectSubscription, selectUserDocRef, updateSubscription} from "../redux/authSlice";

const Page = () => {
    const isSubscribed = useSelector(selectSubscription)
    const docRef = useSelector(selectUserDocRef)
    const dispatch = useDispatch();

    const handleSubscribe = async() => {
        await updateDoc(docRef, {
            isSubscribed: true
        })
        dispatch(updateSubscription(true));
    }

    const handleUnSubscribe = async() => {
        await updateDoc(docRef, {
            isSubscribed: false
        })
        dispatch(updateSubscription(false));
    }

    return (
        <>
        {isSubscribed ? 
        <>
        <button onClick={handleUnSubscribe}>unsubscribe</button>
        </>
        :
        <>
        <button onClick={handleSubscribe}>subscribe</button>
        </>}
        </>
    )
}

export default Page;