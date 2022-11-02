import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';

import { getProfileFormData } from '../../selectors';
import { IProfile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileFormData(getState());

    try {
      const response = await extra.api.put<IProfile>('/profile', formData);

      return response.data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);
