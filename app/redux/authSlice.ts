import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/User';

interface AuthState {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggingIn: false,
  isLoggedIn: false,
  user: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoggingIn = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoggingIn = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggingIn = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
    updateSubscription: (state, action: PayloadAction<boolean>) => {
       if(state.user){
        state.user.isSubscribed = action.payload;
       }
    }
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout, updateSubscription } = authSlice.actions;

export const selectUserName = ({user} : AuthState) => user?.displayName;
export const selectUserEmail = ({user} : AuthState) => user?.email;
export const selectUserDocRef = ({user} : AuthState) => user?.docRef;
export const selectUserUid = ({user} : AuthState) => user?.uid;
export const selectSubscription = ({user} : AuthState) => user?.isSubscribed;


export default authSlice.reducer;
