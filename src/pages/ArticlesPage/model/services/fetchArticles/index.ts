import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

export const fetchArticles = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
    >(
      'articlesPage/fetchArticles',
      async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
          const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
              _expand: 'user',
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
