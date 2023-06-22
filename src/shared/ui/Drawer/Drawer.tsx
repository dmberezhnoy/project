import React from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal';
import cls from './Drawer.module.scss';

interface IDrawerProps {
    className?: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = React.memo((props: IDrawerProps) => {
  const {
    className, onClose, isOpen, children, lazy,
  } = props;
  const { theme } = useTheme();
  const { close, isMounted, isClosing } = useModal({ onClose, isOpen });

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme])}>
        <Overlay onClick={close}>
          <div className={cls.content}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  );
});
