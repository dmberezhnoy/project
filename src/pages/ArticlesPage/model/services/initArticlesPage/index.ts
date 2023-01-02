import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';

import { getArticlesPageInitialized } from '../../selectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticles } from '../fetchArticles';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const isInitialized = getArticlesPageInitialized(getState());

        if (!isInitialized) {
          const orderFromUrl = searchParams.get('order') as SortOrder;
          const sortFromUrl = searchParams.get('sort') as ArticleSortField;
          const searchFromUrl = searchParams.get('search');

          if (orderFromUrl) dispatch(articlePageActions.setOrder(orderFromUrl));
          if (sortFromUrl) dispatch(articlePageActions.setSort(sortFromUrl));
          if (searchFromUrl) dispatch(articlePageActions.setSearch(searchFromUrl));

          dispatch(articlePageActions.initState());
          dispatch(fetchArticles({}));
        }
      },
    );
