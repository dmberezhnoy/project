import { StateSchema } from '@/app/providers/StoreProvider';

import { getArticleDetailsError } from '../getArticleDetailsError';

describe('getArticleDetailsError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'Some wrong',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toBe('Some wrong');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
  });
});
