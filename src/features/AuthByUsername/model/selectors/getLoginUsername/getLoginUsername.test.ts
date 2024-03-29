import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginUsername } from '../getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'name',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('name');
  });
  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
