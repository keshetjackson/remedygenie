import { User } from "firebase/auth";
export interface AuthState {
    isLoggingIn: boolean;
    isLoggedIn: boolean;
    user: User | null; 
    error: string | null;
  }
  
  