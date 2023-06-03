"use client"
import { auth, db} from "./firebaseApp";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginRequest,loginSuccess,loginFailure } from "../redux/authSlice";
import { store } from "../redux/store";
import { addDoc, collection, getDocs,doc, getDoc } from "firebase/firestore";


const SignInButton = () => {

  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();


  const signIn = async () => {
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        let docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        docSnap.exists() ? docRef = docRef :( 
          docRef = await addDoc(collection(db, "users"), {
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL,
          provider: user.providerId,
          uid: user.uid
        }));
        dispatch(loginSuccess({ uid: user.uid, email: user.email, displayName: user.displayName , dbDocRef: docRef}));
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