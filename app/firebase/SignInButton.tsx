"use client"
import { auth  } from "./firebaseApp";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginRequest,loginSuccess,loginFailure } from "../redux/authSlice";

const SignInButton = () => {

  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();


  const signIn = async () => {
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        dispatch(loginSuccess({ uid: user.uid, email: user.email, displayName: user.displayName }));        console.log(`login success for use ${user}`);
      } catch (error : any  ) {
        dispatch(loginFailure(error.message));
        console.log('Failed to sign in:', error);
    }
    
  };
  
  return (
    <button onClick={signIn}>sign in</button>
  )
}

export default SignInButton;