import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileError } from '../getProfileError';

describe('getProfileError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error test',
      },
    };
    expect(getProfileError(state as StateSchema)).toBe('error test');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
