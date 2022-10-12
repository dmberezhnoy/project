import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation('main');
  const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);

  const handleOpenLoginForm = useCallback(() => setIsOpenLoginForm(true), []);
  const handleCloseLoginForm = useCallback(() => setIsOpenLoginForm(false), []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={handleOpenLoginForm}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.actions}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isOpenLoginForm} onClose={handleCloseLoginForm} />
    </div>
  );
};
