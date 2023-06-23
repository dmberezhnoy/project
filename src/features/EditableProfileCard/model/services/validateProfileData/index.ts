import { IProfile } from '@/entities/Profile';

import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) return [ValidateProfileError.NO_DATA];

  const {
    age,
    country,
    lastName,
    firstName,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age) || age < 0) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
