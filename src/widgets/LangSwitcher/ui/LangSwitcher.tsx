import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleToggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={handleToggleLanguage} theme={ThemeButton.CLEAR}>{t('Язык')}</Button>
    </div>
  );
};
