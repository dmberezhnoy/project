import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPageSize = (state: StateSchema) => state.articlesPage?.pageSize || 9;
