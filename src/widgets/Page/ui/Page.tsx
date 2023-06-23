import React, { MutableRefObject, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  useAppDispatch,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from '@/shared/lib/hooks';

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

  const { pathname: currentPath } = useLocation();
  const dispatch = useAppDispatch();
  const initialScrollPosition = useSelector(
    (state: StateSchema) => getUIScrollByPath(state, currentPath),
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = initialScrollPosition;
  });

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: currentPath,
    }));
  }, 3000);

  return (
    <main
      className={classNames(cls.Page, {}, [className])}
      onScroll={handleScroll}
      ref={wrapperRef}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
    </main>
  );
});
