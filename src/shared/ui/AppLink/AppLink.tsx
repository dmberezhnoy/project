import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLinkProps> = (props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...restProps
  } = props;

  return (
    <Link
      className={classNames('', {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
