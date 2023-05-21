"use client"
import React from 'react';
import { onAuthStateChanged, getAuth, User, Auth } from 'firebase/auth';
import { firebase_app } from '../firebase/firebaseApp';

const auth = getAuth(firebase_app);

export type AuthContextType = {
  auth: Auth;
  user: User | null;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuthContext = () => React.useContext(AuthContext);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
