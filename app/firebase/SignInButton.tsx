"use client"
import { auth  } from "./firebaseApp";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { GetServerSideProps } from "next";

const SignInButton = () => {

  const provider = new GoogleAuthProvider();


  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result.user)
  }
  return (
    <button onClick={() => signIn}>sign in</button>
  )
}

export default SignInButton;