"use client"
import React, { useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

type AuthContextProps = {
  user: User | null;
};

export const AuthContext = React.createContext<AuthContextProps>({ user: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

