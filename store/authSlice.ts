import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
}

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
  },
  reducers: {
    login: (state: Auth, action: PayloadAction<User>) => {
      sessionStorage.setItem('token', action.payload.token);
      state.user = action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice;
