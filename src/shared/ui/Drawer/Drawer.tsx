import React, { useCallback, useEffect } from 'react';

import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { useModal } from '@/shared/lib/hooks/useModal';

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

const height = window.innerHeight - 100;

const DrawerContent = React.memo((props: IDrawerProps) => {
  const {
    className,
    onClose,
    isOpen,
    children,
    lazy,
  } = props;
  const { theme } = useTheme();
  const { Gesture, Spring } = useAnimationLibs();
  const { close, isMounted, isClosing } = useModal({ onClose, isOpen });
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const handleOpenDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const handleCloseDrawer = useCallback((velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  }, [Spring.config.stiff, api, onClose]);

  useEffect(() => {
    if (isOpen) handleOpenDrawer();
  }, [isOpen, handleOpenDrawer]);

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], movement: [, my], cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          handleCloseDrawer();
        } else {
          handleOpenDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer = React.memo((props: IDrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
});
