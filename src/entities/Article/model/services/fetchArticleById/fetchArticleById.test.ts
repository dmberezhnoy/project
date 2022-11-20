import { IArticle } from 'entities/Article';
import { ArticleTypes } from 'entities/Article/model/types';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { fetchArticleById } from '../fetchArticleById';

const mockData: IArticle = {
  id: '1',
  title: 'Test title',
  subtitle: 'Test subtitle',
  blocks: [],
  img: '',
  type: [ArticleTypes.ECONOMICS, ArticleTypes.IT],
  createdAt: '08.11.2022',
  views: 423,
  user: { id: '1', username: 'test' },
};

describe('fetchArticleById.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockData }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(thunk.api.put).toHaveBeenCalledTimes(0);

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockData);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.reject());
    const result = await thunk.callThunk('3');

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(thunk.api.put).toHaveBeenCalledTimes(0);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
  });
});
