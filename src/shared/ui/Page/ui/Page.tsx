import React, { MutableRefObject, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks';

import cls from './Page.module.scss';

interface IPageProps {
    className?: string;
    onScrollEnd?: () => void;
    children: React.ReactNode;
}

export const Page = React.memo((props: IPageProps) => {
  const { className, onScrollEnd, children } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
