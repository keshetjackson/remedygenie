"use client"
import React from "react";
import { store } from "../redux/store";
import { updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectSubscription, selectUserUid, updateSubscription } from "../redux/authSlice";
import { getUserDocRef } from "../firebase/firestoreUtils";

const Page = async() => {
    const isSubscribed = useSelector(selectSubscription);
    const userUid = useSelector(selectUserUid);
    const dispatch = useDispatch();
    const docRef = await getUserDocRef(userUid!)

    const handleSubscribe = async() => {  
        if (!docRef) {
          console.log('docRef is undefined');
          return;
        }
      
        await updateDoc(docRef, {  
          isSubscribed: true  
        })  
        dispatch(updateSubscription(true));  
      }
      

    const handleUnSubscribe = async() => {
        if(docRef)
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