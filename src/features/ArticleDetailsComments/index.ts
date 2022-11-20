export { IArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export { articleDetailsCommentsReducer, getArticleComments } from './model/slice/articleDetailsCommentsSlice';
export * from './model/selectors';
export { addCommentForArticle, fetchCommentsByArticleId } from './model/services';
