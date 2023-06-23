import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IUser, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  IThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;
    try {
      const response = await extra.api.post<IUser>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);
