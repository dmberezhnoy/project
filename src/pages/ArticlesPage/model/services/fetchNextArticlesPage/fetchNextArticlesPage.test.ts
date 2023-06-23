import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

import { fetchArticles } from '../fetchArticles';
import { fetchNextArticlesPage } from '../fetchNextArticlesPage';

jest.mock('../fetchArticles');

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        pageSize: 3,
        isLoading: false,
        hasMore: true,
        _initialized: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalled();
  });

  test('fetch not called (hasMore - false)', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        pageSize: 3,
        isLoading: false,
        hasMore: false,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });

  test('fetch not called (isLoading - true)', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        pageSize: 3,
        isLoading: true,
        hasMore: false,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
