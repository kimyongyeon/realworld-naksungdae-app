import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  username: string;
  email: string;
  password: string;
  token: string;
  bio: string;
  image: string;
}

export interface User {
  userinfo: UserInfo;
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userinfo: {
      username: '',
      email: '',
      password: '',
      token: '',
      bio: '',
      image: '',
    },
  },
  reducers: {
    login: (state: User, action: PayloadAction<UserInfo>) => {
      sessionStorage.setItem('token', action.payload.token);

      state.userinfo = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice;
