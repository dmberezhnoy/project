import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
    >(
      'articlesDetailsPage/fetchArticleRecommendations',
      async (params, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
          const response = await extra.api.get<IArticle[]>(
            '/articles',
            { params: { _expand: 'user', _limit: 4 } },
          );

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue('Error');
        }
      },
    );
