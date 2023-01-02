import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticles } from 'pages/ArticlesPage/model/services';
import { articlePageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';

import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    IThunkConfig<string>
    >(
      'articlesPage/fetchNextArticlesPage',
      async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMoreArticles = getArticlesPageHasMore(getState());
        const currentPage = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMoreArticles && !isLoading) {
          const newPage = currentPage + 1;
          dispatch(articlePageActions.setPage(newPage));
          dispatch(fetchArticles({
            page: newPage,
          }));
        }
      },
    );
