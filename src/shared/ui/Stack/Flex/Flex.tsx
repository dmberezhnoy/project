import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

export interface IFlexProps {
    children: React.ReactNode;
    direction: FlexDirection;
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: FlexGap;
    wrap?: boolean;
    maxWidth?: boolean;
    className?: string;
}

const justifyClasses: Record<FlexJustify, string> = {
  center: cls.justifyCenter,
  start: cls.justifyStart,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  start: cls.alignStart,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export const Flex = React.memo((props: IFlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '8',
    wrap = false,
    maxWidth = false,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  const mods = {
    [cls.maxWidth]: maxWidth,
    [cls.wrap]: wrap,
  };

  return (
    <div className={classNames(cls.Flex, mods, classes)}>
      {children}
    </div>
  );
});
