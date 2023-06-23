import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import './Loader.scss';

interface ILoaderProps {
    className?: string;
}

export const Loader: React.FC<ILoaderProps> = ({ className }) => (
  <div className={classNames('lds-spinner', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
