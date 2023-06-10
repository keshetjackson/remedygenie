"use client"
import { auth, db} from "./firebaseApp";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginRequest,loginSuccess,loginFailure, loginUser } from "../redux/authSlice";
import { AppDispatch, store } from "../redux/store";
import { addDoc, collection, getDocs,doc, getDoc } from "firebase/firestore";


const SignInButton = () => {

  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch<AppDispatch>(); // Use typed useDispatch

  const signIn = async () => {
    dispatch(loginRequest());
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        // Dispatch the loginUser thunk with the user object
        dispatch(loginUser(user));
        console.log(`login success for user :  ${user}`);
      } catch (error : any  ) {
        console.log('Failed to sign in:', error);
    }
  };

  return (
    <>
      <button onClick={signIn}>Sign in</button>
    </>
  )
}

export default SignInButton;
