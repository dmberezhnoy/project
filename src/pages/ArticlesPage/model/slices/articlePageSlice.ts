import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleView, IArticle } from 'entities/Article';
import { ArticleTypes } from 'entities/Article/model/types';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const';
import { SortOrder } from 'shared/types';

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
    pageSize: 10,
    hasMore: true,
    search: '',
    order: 'asc',
    sort: ArticleSortField.CREATED_AT,
    type: ArticleTypes.ALL,

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
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypes>) => {
      state.type = action.payload;
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
      .addCase(fetchArticles.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      });
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.pageSize;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
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
