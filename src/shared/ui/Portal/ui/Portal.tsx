import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal: React.FC<IPortalProps> = (props) => {
  const { children, container = document.body } = props;
  return createPortal(children, container);
};
