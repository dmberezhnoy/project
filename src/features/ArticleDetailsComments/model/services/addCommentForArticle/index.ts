import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { fetchCommentsByArticleId } from '../../services';

export const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    IThunkConfig<string>
    >(
      'articleDetails/addCommentForArticle',
      async (comment, thunkApi) => {
        const {
          extra, rejectWithValue, dispatch, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());
        const createdDate = new Date();

        if (!userData || !comment || !article) {
          return rejectWithValue('Empty data');
        }

        try {
          const response = await extra.api.post<IComment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text: comment,
            createdDate: createdDate.toLocaleDateString(),
          });

          if (!response.data) {
            throw new Error();
          }
          dispatch(fetchCommentsByArticleId(article.id));

          return response.data;
        } catch (e) {
          return rejectWithValue('Error');
        }
      },
    );
