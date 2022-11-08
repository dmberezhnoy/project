import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize;
  align?: TextAlign;
}

export const Text = React.memo(({
  className,
  title,
  text,
  size = TextSize.M,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
}: ITextProps) => {
  const additionalClassNames = [className, cls[theme], cls[align], cls[size]];

  return (
    <div className={classNames('', {}, additionalClassNames)}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
