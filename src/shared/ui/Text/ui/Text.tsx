import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = React.memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: ITextProps) => {
  const mods = {
    [cls[theme]]: true,
  };

  return (
    <div className={classNames('', mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
