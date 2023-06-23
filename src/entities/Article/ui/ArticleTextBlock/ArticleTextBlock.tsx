import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import { IArticleTextBlock } from '../../model/types';
import cls from './ArticleTextBlock.module.scss';

interface IArticleTextBlockProps {
    className?: string;
    block: IArticleTextBlock;
}

export const ArticleTextBlock = React.memo((props: IArticleTextBlockProps) => {
  const { className, block } = props;
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.articleTitle} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} />
      ))}
    </div>
  );
});
