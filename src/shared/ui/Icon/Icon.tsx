import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IIconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = React.memo((props: IIconProps) => {
  const { className, inverted, Svg } = props;
  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
  );
});
