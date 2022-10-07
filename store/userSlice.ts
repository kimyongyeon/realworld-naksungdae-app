import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
  bio: string;
  image: string;
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    email: '',
    password: '',
    token: '',
    bio: '',
    image: '',
  },
  reducers: {
    setEmail: (state: User, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: User, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    login: (state: User, action: PayloadAction<User>) => {
      state.bio = action.payload.bio;
      state.image = action.payload.image;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const { setEmail, setPassword, login } = loginSlice.actions;
export default loginSlice;
