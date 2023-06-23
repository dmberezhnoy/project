import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileError } from '../../../model/types/editableProfileCardSchema';
import { validateProfileData } from '../validateProfileData';

const mockData = {
  username: 'admin',
  firstName: 'Дима',
  lastName: 'Бережной',
  country: Country.Russia,
  currency: Currency.RUB,
  age: 23,
  city: 'Samara',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(mockData);
    expect(result).toEqual([]);
  });

  test('empty args', async () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...mockData, firstName: '', lastName: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('negative age', async () => {
    const result = validateProfileData({ ...mockData, age: -5 });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('not integer age', async () => {
    const result = validateProfileData({ ...mockData, age: 43.3 });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('empty country', async () => {
    const result = validateProfileData({ ...mockData, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all fields', async () => {
    const result = validateProfileData({
      ...mockData, firstName: '', age: 0, country: undefined,
    });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
