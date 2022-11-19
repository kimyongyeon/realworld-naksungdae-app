import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
  bio: string;
  image: string;
}

export interface Auth {
  user: User;
  isLogin: boolean;
  isLoaded: boolean;
}

export const getUser = async (token: string): Promise<User> => {
  const { data } = await axios.get('https://api.realworld.io/api/user', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data.user;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      username: '',
      email: '',
      password: '',
      token: '',
      bio: '',
      image: '',
    },
    isLogin: false,
    isLoaded: false,
  },
  reducers: {
    setUser: (state: Auth, action: PayloadAction<User>) => {
      sessionStorage.setItem('token', action.payload.token);
      state.user = action.payload;
      state.isLogin = true;
      state.isLoaded = true;
    },
    setIsLoaded: (state: Auth) => {
      state.isLoaded = true;
    },
  },
});

export const { setUser, setIsLoaded } = authSlice.actions;
export default authSlice;