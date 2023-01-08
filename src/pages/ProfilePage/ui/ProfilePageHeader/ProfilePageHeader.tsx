import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<IProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const isEditPermission = authData?.id === profileData?.id;

  const handleEditProfile = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const handleCancelEditProfile = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);
  const handleSaveProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack className={className} justify="between" maxWidth>
      <Text title={t('Профиль')} />
      {isEditPermission && (
        <div>
          {
            readonly
              ? <Button theme={ButtonTheme.OUTLINE} onClick={handleEditProfile}>{t('Редактировать')}</Button>
              : (
                <HStack>
                  <Button theme={ButtonTheme.OUTLINE_ATTENTION} onClick={handleCancelEditProfile}>{t('Отменить')}</Button>
                  <Button theme={ButtonTheme.OUTLINE} onClick={handleSaveProfile}>{t('Сохранить')}</Button>
                </HStack>
              )
          }
        </div>
      )}
    </HStack>
  );
};
