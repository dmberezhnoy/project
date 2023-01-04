export { IArticleDetailsPageSchema } from './model/types';
export { articleDetailsPageReducer } from './model/slice';
export { articleDetailsCommentsReducer, getArticleComments } from './model/slice/articleDetailsCommentsSlice';
export { articleDetailsRecommendationsReducer, getArticleRecommendations } from './model/slice/articleDetailsRecommendationsSlice';
export * from './model/selectors';
export * from './model/services';
