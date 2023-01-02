import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView, IArticle } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const';

import { fetchArticles } from '../services';
import { IArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
    ids: [],
    isLoading: false,
    error: undefined,
    entities: { },
    view: ArticleView.PLATE,
    page: 1,
    hasMore: true,
    _initialized: false,
  }),
  reducers: {
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.pageSize = view === ArticleView.LIST ? 4 : 9;
      state._initialized = true;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setPageHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      });
    builder
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      });
    builder
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articlePageReducer,
  actions: articlePageActions,
} = articlePageSlice;
