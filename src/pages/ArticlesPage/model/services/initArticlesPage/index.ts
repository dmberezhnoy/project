import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';

import { getArticlesPageInitialized } from '../../selectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticles } from '../fetchArticles';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    IThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const isInitialized = getArticlesPageInitialized(getState());

        if (!isInitialized) {
          dispatch(articlePageActions.initState());
          dispatch(fetchArticles({
            page: 1,
          }));
        }
      },
    );
