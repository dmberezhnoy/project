import { IRating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}
interface RateArticleRatingArg extends GetArticleRatingArg {
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),

    rateArticle: build.mutation<void, RateArticleRatingArg>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;
