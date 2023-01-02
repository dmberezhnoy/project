import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams';

import {
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSize,
  getArticlesPageSort,
} from '../../selectors';

interface IFetchArticlesParams {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
    IArticle[],
    IFetchArticlesParams,
    IThunkConfig<string>
    >(
      'articlesPage/fetchArticles',
      async (params, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const page = getArticlesPageNum(getState());
        const pageSize = getArticlesPageSize(getState());
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());

        try {
          addQueryParams({ sort, order, search });
          const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
              _expand: 'user',
              _page: page,
              _limit: pageSize,
              _sort: sort,
              _order: order,
              q: search,
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
