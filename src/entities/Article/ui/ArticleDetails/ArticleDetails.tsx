import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar-icon.svg';
import OpenEyeIcon from '@/shared/assets/icons/eye-open-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize } from '@/shared/ui/Text/ui/Text';

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors';
import { fetchArticleById } from '../../model/services';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlockType, ArticleBlockTypes } from '../../model/types';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = React.memo((props: IArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlockType) => {
    switch (block.type) {
    case ArticleBlockTypes.TEXT:
      return <ArticleTextBlock key={block.id} block={block} />;
    case ArticleBlockTypes.CODE:
      return <ArticleCodeBlock key={block.id} block={block} />;
    case ArticleBlockTypes.IMAGE:
      return <ArticleImageBlock key={block.id} block={block} />;
    default:
      return null;
    }
  }, []);

  let content;
  if (isLoading) {
    content = (
      <VStack gap="16" align="start" maxWidth>
        <Skeleton width={200} height={200} borderRadius="50%" className={cls.avatar} />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </VStack>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" maxWidth>
          <Avatar size={200} src={article?.img} />
        </HStack>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack>
          <Icon Svg={OpenEyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </HStack>
        <VStack gap="16" maxWidth align="start">
          {article?.blocks.map(renderBlock)}
        </VStack>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
