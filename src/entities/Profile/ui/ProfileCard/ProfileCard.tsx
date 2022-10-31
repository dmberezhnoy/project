import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text';

import { getProfileData, getProfileError, getProfileIsLoading } from '../../model/selectors';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = React.memo(({ className }: IProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.profileHeader}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={cls.profileData}>
        <Input value={profileData?.firstName} placeholder={t('Ваше имя')} />
        <Input value={profileData?.lastName} placeholder={t('Ваша фамилия')} />
      </div>
    </div>
  );
});
