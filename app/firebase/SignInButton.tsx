"use client"
import { useAuthContext } from "../context/AuthContext";
import { initFirebase } from "./firebaseApp";
import {getAuth, GoogleAuthProvider, signInWithPopup, Auth} from "firebase/auth";
import { GetServerSideProps } from "next";

const SignInButton = () => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = useAuthContext();

  const signIn = async () => {
    const result = await signInWithPopup(auth?.auth as Auth, provider)
    console.log(result.user)
  }
  return (
    <button onClick={() => signIn}>sign in</button>
  )
}

export default SignInButton;