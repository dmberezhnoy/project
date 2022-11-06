import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData, updateProfileData } from '../services';
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
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    cancelEditProfile: (state) => {
      state.readonly = true;
      state.validateError = undefined;
      state.formData = state.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.isLoading = false;
      state.data = action.payload;
      state.formData = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.validateError = undefined;
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.isLoading = false;
      state.data = action.payload;
      state.formData = action.payload;
      state.readonly = true;
      state.validateError = undefined;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateError = action.payload;
    });
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice;
