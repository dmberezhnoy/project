import React, { HTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: React.ReactNode;
}

export const Card = React.memo((props: ICardProps) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.Card, {}, [className])}>
      {children}
    </div>
  );
});
