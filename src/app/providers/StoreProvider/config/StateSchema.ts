import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // Async reducers
    loginForm?: ILoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) =>void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager
}
