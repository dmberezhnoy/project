import React from 'react';

import { maxHeaderSize } from 'http';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
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

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

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

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames('', {}, additionalClassNames)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
