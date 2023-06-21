import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entities/Profile';

import { getProfileFormData } from '../../selectors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from '../validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<ValidateProfileError[]>
    >(
      'profile/updateProfileData',
      async (profileId, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileFormData(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
          return rejectWithValue(errors);
        }

        try {
          const response = await extra.api.put<IProfile>(
            `/profile/${formData?.id}`,
            formData,
          );

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
      },
    );
