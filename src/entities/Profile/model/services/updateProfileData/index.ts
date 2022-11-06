import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';

import { getProfileFormData } from '../../selectors';
import { IProfile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<ValidateProfileError[]>
    >(
      'profile/updateProfileData',
      async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileFormData(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
          return rejectWithValue(errors);
        }

        try {
          const response = await extra.api.put<IProfile>('/profile', formData);

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
      },
    );
