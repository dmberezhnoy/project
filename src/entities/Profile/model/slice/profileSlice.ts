import { createSlice } from '@reduxjs/toolkit';

import { IProfile, IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice;
