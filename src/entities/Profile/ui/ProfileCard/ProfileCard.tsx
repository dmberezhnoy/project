import React from 'react';
import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';

import { IProfile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

export interface IChangeController {
    firstName?: (value: string) => void;
    lastName?: (value: string) => void;
    age?: (value: string) => void;
    city?: (value: string) => void;
    username?: (value: string) => void;
    avatar?: (value: string) => void;
    currency?: (value: Currency) => void;
    country?: (value: Country) => void;
}

interface IProfileCardProps {
    className?: string;
    profile?: IProfile;
    isLoading?: boolean;
    readonly?: boolean;
    error?: string;
    onChangeController?: IChangeController;
}

export const ProfileCard = React.memo((props: IProfileCardProps) => {
  const {
    className,
    profile,
    isLoading,
    readonly,
    error,
    onChangeController,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {profile?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={profile.avatar} />
        </div>
      )}
      <Input
        value={profile?.firstName}
        placeholder={t('Ваше имя')}
        onChange={onChangeController?.firstName}
        readonly={readonly}
      />
      <Input
        value={profile?.lastName}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeController?.lastName}
        readonly={readonly}
      />
      <Input
        value={profile?.age}
        placeholder={t('Ваш возраст')}
        onChange={onChangeController?.age}
        readonly={readonly}
      />
      <Input
        value={profile?.city}
        placeholder={t('Город')}
        onChange={onChangeController?.city}
        readonly={readonly}
      />
      <Input
        value={profile?.username}
        placeholder={t('Имя пользователя')}
        onChange={onChangeController?.username}
        readonly={readonly}
      />
      <Input
        value={profile?.avatar}
        placeholder={t('Укажите ссылку на аватар')}
        onChange={onChangeController?.avatar}
        readonly={readonly}
      />
      <CurrencySelect
        value={profile?.currency}
        onChange={onChangeController?.currency}
        readonly={readonly}
      />
      <CountrySelect
        value={profile?.country}
        onChange={onChangeController?.country}
        readonly={readonly}
      />
    </div>
  );
});
