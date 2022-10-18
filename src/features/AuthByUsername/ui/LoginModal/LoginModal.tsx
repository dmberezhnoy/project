import React, { Suspense } from 'react';

import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = ({
  className,
  isOpen,
  onClose,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);
