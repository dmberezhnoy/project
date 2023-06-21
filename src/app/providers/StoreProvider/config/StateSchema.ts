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
import { IUserSchema } from 'entities/User';
import { IAddCommentFormSchema } from 'features/AddCommentForm';
import { IArticleDetailsPageSchema } from 'features/ArticleDetailsComments';
import { ILoginSchema } from 'features/AuthByUsername';
import { IProfileSchema } from 'features/EditableProfileCard';
import { UISchema } from 'features/UI';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlesPageSchema;
    articleDetailsPage?: IArticleDetailsPageSchema
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
