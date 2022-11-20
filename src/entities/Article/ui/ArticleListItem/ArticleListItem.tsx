import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import OpenEyeIcon from 'shared/assets/icons/eye-open-icon.svg';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text';

import {
  ArticleBlockTypes, ArticleView, IArticle, IArticleTextBlock,
} from '../../model/types';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticleView;
}

export const ArticleListItem = React.memo((props: IArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const Types = <Text text={article.type.join(', ')} className={cls.types} />;
  const Views = (
    <div className={cls.views}>
      <Text text={String(article.views)} />
      <Icon Svg={OpenEyeIcon} />
    </div>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockTypes.TEXT) as IArticleTextBlock;
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} />
            <Text text={article.createdAt} className={cls.createdAt} />
          </div>
          <Text title={article.title} />
          {Types}
          <img src={article.img} alt={article.title} className={cls.image} />
          {textBlock && <ArticleTextBlock block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={handleOpenArticle}
            >
              {t('Читать далее')}
            </Button>
            {Views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card onClick={handleOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.image} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {Types}
          {Views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
