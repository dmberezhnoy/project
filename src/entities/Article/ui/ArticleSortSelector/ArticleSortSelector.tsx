import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { ISelectOption, Select } from '@/shared/ui/Select/Select';

import { ArticleSortField } from '../../model/types';
import cls from './ArticleSortSelector.module.scss';

interface IArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = React.memo((props: IArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<ISelectOption<SortOrder>[]>(() => [
    {
      content: t('возрастанию'),
      value: 'asc',
    },
    {
      content: t('убыванию'),
      value: 'desc',
    },
  ], [t]);
  const sortFieldOptions = useMemo<ISelectOption<ArticleSortField>[]>(() => [
    {
      content: t('дате создания'),
      value: ArticleSortField.CREATED_AT,
    },
    {
      content: t('названию'),
      value: ArticleSortField.TITLE,
    },
    {
      content: t('просмотрам'),
      value: ArticleSortField.VIEWS,
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select label={t('Сортировать по')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
      <Select label={t('по')} options={orderOptions} value={order} onChange={onChangeOrder} />
    </div>
  );
});
