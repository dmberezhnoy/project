import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { IArticleDetailsSchema } from 'entities/Article';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { IAddCommentFormSchema } from 'features/AddCommentForm';
import { IArticleDetailsCommentsSchema } from 'features/ArticleDetailsComments';
import { ILoginSchema } from 'features/AuthByUsername';
import { UISchema } from 'features/UI';
import { IArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    ui: UISchema;

    // Async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: StateSchema;
}
