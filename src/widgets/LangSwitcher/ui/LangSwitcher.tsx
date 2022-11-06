import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher = React.memo(({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleToggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={handleToggleLanguage} theme={ButtonTheme.OUTLINE_INVERTED}>{t('Язык')}</Button>
    </div>
  );
});
