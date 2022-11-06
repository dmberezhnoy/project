import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { fetchProfileData } from '../fetchProfileData';

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
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockData }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockData);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
