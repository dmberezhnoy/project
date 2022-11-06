import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { IProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const mockData = {
  username: 'admin',
  firstName: 'Дима',
  lastName: 'Бережной',
  country: Country.Russia,
  currency: Currency.RUB,
  age: 23,
  city: 'Samara',
};

describe('profileSlice.test', () => {
  test('set readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(profileReducer(
        state as IProfileSchema,
        profileActions.setReadonly(true),
    )).toEqual(
      { readonly: true },
    );
  });

  test('set cancel edit', () => {
    const state: DeepPartial<IProfileSchema> = {
      readonly: false,
      formData: undefined,
      data: mockData,
      validateError: [ValidateProfileError.INCORRECT_USER_DATA],
    };
    expect(profileReducer(
        state as IProfileSchema,
        profileActions.cancelEditProfile(),
    )).toEqual({
      readonly: true,
      formData: mockData,
      data: mockData,
      validateError: undefined,
    });
  });
});
