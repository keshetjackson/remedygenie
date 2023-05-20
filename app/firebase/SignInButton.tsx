// import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import firebase_app from './firebaseApp';

// const useUser = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = firebase_app onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setUser(authUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return user;
// };

// const SignInButton: React.FC = () => {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <button onClick={signInWithGoogle}>Sign in with Google</button>
//   );
// };

// const MyApp: React.FC = () => {
//   const user = useUser();

//   return (
//     <div>
//       {user ? (
//         <p>Welcome, {user.displayName}!</p>
//       ) : (
//         <SignInButton />
//       )}
//     </div>
//   );
// };

// export default MyApp;
