import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const profileData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateProfileErrorTranslates = {
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const handleController = useMemo(() => ({
    firstName: (value: string) => dispatch(profileActions.updateProfile({ firstName: value })),
    lastName: (value: string) => dispatch(profileActions.updateProfile({ lastName: value })),
    city: (value: string) => dispatch(profileActions.updateProfile({ city: value })),
    username: (value: string) => dispatch(profileActions.updateProfile({ username: value })),
    avatar: (value: string) => dispatch(profileActions.updateProfile({ avatar: value })),
    age: (value: string) => dispatch(profileActions.updateProfile({ age: +value })),
    currency: (value: Currency) => dispatch(profileActions.updateProfile({ currency: value })),
    country: (value: Country) => dispatch(profileActions.updateProfile({ country: value })),
  }), [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [])}>
        <VStack gap="16" maxWidth>
          <ProfilePageHeader />
          {!!validateErrors?.length && validateErrors.map((err) => (
            <Text
              theme={TextTheme.ERROR}
              text={validateProfileErrorTranslates[err]}
              key={err}
            />
          ))}
          <ProfileCard
            profile={profileData}
            isLoading={isLoading}
            readonly={readonly}
            error={error}
            onChangeController={handleController}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
