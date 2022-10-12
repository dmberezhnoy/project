import React from 'react';

import { Modal } from 'shared/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

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
    <LoginForm />
  </Modal>
);
