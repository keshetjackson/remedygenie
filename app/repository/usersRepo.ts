import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseApp";
import { User } from "../interfaces/User";


export async function getUserDoc(user : any) {
    const userDocRef = doc(db, "users", user.uid);
  
    let userDocData = null;
    
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      userDocData = userDoc.data();
    } else {
      userDocData = {
        email: user.email,
        name: user.displayName,
        provider: user.providerId,
        uid: user.uid,
        docRef: userDocRef,
        isSubscribed: false // Default to false if the user document doesn't exist yet
      };
      await setDoc(userDocRef, userDocData, {merge:true});
    }
  
    return userDocData as User;
  }
  