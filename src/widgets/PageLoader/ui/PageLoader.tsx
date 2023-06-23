import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';

import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = ({ className }) => (
  <div className={classNames(cls.PageLoader, {}, [className])}><Loader /></div>
);
