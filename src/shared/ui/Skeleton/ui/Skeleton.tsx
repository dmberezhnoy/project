import React, { CSSProperties } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = React.memo((props: ISkeletonProps) => {
  const {
    className,
    height,
    width,
    borderRadius,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
  );
});
