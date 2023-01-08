import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from '../updateProfileData';

const mockData = {
  username: 'admin',
  firstName: 'Дима',
  lastName: 'Бережной',
  country: Country.Russia,
  currency: Currency.RUB,
  age: 23,
  city: 'Samara',
};

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: mockData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: mockData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(thunk.api.get).toHaveBeenCalledTimes(0);
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockData);
  });

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: mockData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(thunk.api.get).toHaveBeenCalledTimes(0);
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('client error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...mockData, lastName: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalledTimes(0);
    expect(thunk.api.get).toHaveBeenCalledTimes(0);
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
