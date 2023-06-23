import React from 'react';

import ListIcon from '@/shared/assets/icons/list-icon.svg';
import PlateIcon from '@/shared/assets/icons/plate-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import { ArticleView } from '../../model/types';
import cls from './ArticleViewSelector.module.scss';

interface IArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onChangeView?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.PLATE,
    icon: PlateIcon,
  },
];

export const ArticleViewSelector = React.memo((props: IArticleViewSelectorProps) => {
  const { className, view, onChangeView } = props;

  const handleChangeView = (newView: ArticleView) => () => {
    onChangeView?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={handleChangeView(item.view)}
          key={item.view}
        >
          <Icon
            Svg={item.icon}
            className={classNames('', { [cls.selected]: item.view === view }, [])}
          />
        </Button>
      ))}
    </div>
  );
});
