import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface IOverlayProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Overlay = React.memo((props: IOverlayProps) => {
  const { className, children, onClick } = props;
  return (
    <div className={classNames(cls.Overlay, {}, [className])} onClick={onClick}>
      {children}
    </div>
  );
});
