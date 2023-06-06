"use client"
import { auth, db} from "./firebaseApp";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginRequest,loginSuccess,loginFailure } from "../redux/authSlice";
import { getUserDoc } from "../repository/usersRepo";


const SignInButton = () => {

  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();


  const signIn = async () => {
    dispatch(loginRequest());
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        const userData = await getUserDoc(user);
        dispatch(loginSuccess({ 
          uid: user.uid,
           email: user.email, 
           displayName: user.displayName ,
           docRef: userData.docRef,
           isSubscribed: userData.isSubscribed,
           provider: userData.provider
          }));
        console.log(`login success for user :  ${user}`);
      } catch (error : any  ) {
        dispatch(loginFailure(error.message));
        console.log('Failed to sign in:', error);
    }
    
  };

  
  
  return (
    <>
    <button onClick={signIn}>sign in</button>
    </>
  )
}

export default SignInButton;