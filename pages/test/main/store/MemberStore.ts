import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MemberType } from '@src/pages/test/main/store/MemberType';

const initialState = {
  memberList: [],
};

export const memberSlice = createSlice({
  name: 'memberList',
  initialState,
  reducers: {
    save: (state: { memberList: Array<MemberType> }, action: PayloadAction<MemberType>) => {
      state.memberList = [...state.memberList, action.payload];
    },
  },
});

export const { save } = memberSlice.actions;

export default memberSlice;
