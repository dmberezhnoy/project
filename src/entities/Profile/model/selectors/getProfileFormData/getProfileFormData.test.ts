import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileFormData } from '../getProfileFormData';

describe('getProfileFormData.test', () => {
  test('should return data', () => {
    const formData = {
      username: 'admin',
      firstName: 'Дима',
      lastName: 'Бережной',
      country: Country.Russia,
      currency: Currency.RUB,
      age: 23,
      city: 'Samara',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData,
      },
    };
    expect(getProfileFormData(state as StateSchema)).toEqual(formData);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});
