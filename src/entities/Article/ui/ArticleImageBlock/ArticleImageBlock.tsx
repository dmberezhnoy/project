import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';

import { IArticleImageBlock } from '../../model/types';
import cls from './ArticleImageBlock.module.scss';

interface IArticleImageBlockProps {
    className?: string;
    block: IArticleImageBlock;
}

export const ArticleImageBlock = React.memo((props: IArticleImageBlockProps) => {
  const { className, block } = props;
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
