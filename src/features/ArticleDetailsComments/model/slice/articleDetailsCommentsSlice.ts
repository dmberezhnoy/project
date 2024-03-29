import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';

import { fetchCommentsByArticleId } from '../services';
import { IArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentAdapter.getInitialState(),
);

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    ids: [],
    isLoading: false,
    error: undefined,
    entities: { },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      });
    builder
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        commentAdapter.setAll(state, action.payload);
      });
    builder
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
