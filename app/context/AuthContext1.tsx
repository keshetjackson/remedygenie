// import { useContext, createContext, useEffect, useState } from 'react';
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
//   Auth,
//   User
// } from 'firebase/auth';
// import { auth } from '../firebase/firebaseApp';

// export type AuthContextType = {
//     user : User | null,
//     googleSignIn : any | null,
//     logOut : any | null
//   };
  
//   export const AuthContext = createContext<AuthContextType | null>(null);

// type AuthContextProviderProps = {
//     children: React.ReactNode;
//   };

// export const AuthContextProvider : React.FC<AuthContextProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//   };

//   const logOut = () => {
//       signOut(auth)
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log('User', currentUser)
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const value = {
//     user,
//     googleSignIn,
//     logOut
//   }

//   return (
//     <AuthContext.Provider value={ value }>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };