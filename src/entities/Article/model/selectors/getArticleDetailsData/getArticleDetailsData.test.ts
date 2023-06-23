import { StateSchema } from '@/app/providers/StoreProvider';

import { getArticleDetailsData } from '../getArticleDetailsData';

describe('getArticleDetailsData.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'title test',
      views: 5,
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
