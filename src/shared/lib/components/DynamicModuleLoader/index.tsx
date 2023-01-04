import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface IDynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<IDynamicModuleLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount = true, children } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const isMounted = mountedReducers[name as StateSchemaKey];
      if (!isMounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <div>{children}</div>;
};
