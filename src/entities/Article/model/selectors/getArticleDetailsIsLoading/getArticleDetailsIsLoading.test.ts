import { StateSchema } from 'app/providers/StoreProvider';

import { getArticleDetailsIsLoading } from '../getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading.test', () => {
  test('should return isLoading:true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: true },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });

  test('should return isLoading:false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: false },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });
});
