// "use client"
// import {useContext, createContext, useState, useEffect} from 'react';
// import { onAuthStateChanged, getAuth, User, Auth,signInWithPopup  } from 'firebase/auth';
// import { auth } from '../firebase/firebaseApp';


// export type AuthContextType = {
//   auth: Auth;
//   user: User | null;
// };

// export const AuthContext = createContext<AuthContextType | null>(null);

// export const useAuth = () => useContext(AuthContext);

// type AuthContextProviderProps = {
//   children: React.ReactNode;
// };

// export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ auth, user }}>
//       {loading ? <div>Loading...</div> : children}
//     </AuthContext.Provider>
//   );
// };
