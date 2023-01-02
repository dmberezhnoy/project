import { EntityState } from '@reduxjs/toolkit';

import { ArticleView, IArticle } from 'entities/Article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    pageSize?: number;
    hasMore: boolean;

    _initialized: boolean;
}
