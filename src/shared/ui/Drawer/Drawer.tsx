import React from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal';
import cls from './Drawer.module.scss';

interface IDrawerProps {
    className?: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = React.memo((props: IDrawerProps) => {
  const {
    className, onClose, isOpen, children,
  } = props;
  const { theme } = useTheme();
  const mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose}>
          <div className={cls.content}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  );
});
