import { EntityState } from '@reduxjs/toolkit';

import { ArticleSortField, ArticleView, IArticle } from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    pageSize: number;
    hasMore: boolean;

    order: SortOrder;
    sort: ArticleSortField;
    search: string;

    _initialized: boolean;
}
