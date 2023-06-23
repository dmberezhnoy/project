import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ITabItem, Tabs } from '@/shared/ui/Tabs';

import { ArticleTypes } from '../../model/types';

interface IArticleTypeSelectorProps {
    className?: string;
    value: ArticleTypes;
    onChangeArticleType: (tab: ArticleTypes) => void
}

export const ArticleTypeSelector = React.memo((props: IArticleTypeSelectorProps) => {
  const { className, value, onChangeArticleType } = props;
  const { t } = useTranslation();
  const articleTypeTabsOptions = useMemo<ITabItem[]>(() => [
    { value: ArticleTypes.ALL, content: t('Все') },
    { value: ArticleTypes.IT, content: t('Айти') },
    { value: ArticleTypes.ECONOMICS, content: t('Экономика') },
    { value: ArticleTypes.SCIENCE, content: t('Наука') },
  ], [t]);

  const handleChangeArticleType = useCallback((tabItem: ITabItem) => {
    onChangeArticleType(tabItem.value as ArticleTypes);
  }, [onChangeArticleType]);

  return (
    <Tabs
      className={className}
      tabs={articleTypeTabsOptions}
      onTabClick={handleChangeArticleType}
      value={value}
    />

  );
});
