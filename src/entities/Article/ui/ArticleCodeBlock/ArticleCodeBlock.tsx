import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';

import { IArticleCodeBlock } from '../../model/types';
import cls from './ArticleCodeBlock.module.scss';

interface IArticleCodeBlockProps {
    className?: string;
    block: IArticleCodeBlock;
}

export const ArticleCodeBlock = React.memo((props: IArticleCodeBlockProps) => {
  const { className, block } = props;
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
