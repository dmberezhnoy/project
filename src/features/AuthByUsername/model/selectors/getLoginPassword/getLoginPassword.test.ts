import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from '../getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'pass',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('pass');
  });
  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
