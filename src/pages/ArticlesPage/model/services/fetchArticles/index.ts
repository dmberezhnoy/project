import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

import { getArticlesPageSize } from '../../selectors';

interface IFetchArticlesParams {
    page?: number;
}

export const fetchArticles = createAsyncThunk<
    IArticle[],
    IFetchArticlesParams,
    IThunkConfig<string>
    >(
      'articlesPage/fetchArticles',
      async (params, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = params;
        const pageSize = getArticlesPageSize(getState());

        try {
          const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
              _expand: 'user',
              _page: page,
              _limit: pageSize,
            },
          });

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue('Error');
        }
      },
    );
