import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';

import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<IModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content} onClick={handleContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
