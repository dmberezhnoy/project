import { StateSchema } from 'app/providers/StoreProvider';

import { ValidateProfileError } from '../../../model/types/editableProfileCardSchema';
import { getProfileValidateErrors } from '../getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return server error', () => {
    const errors = [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_COUNTRY];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('should return all [5] ValidateProfileError-s', () => {
    const errors = [
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_DATA,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('should return empty array', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
