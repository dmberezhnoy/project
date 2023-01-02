import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageInitialized = (
  store: StateSchema,
) => store.articlesPage?._initialized || false;
