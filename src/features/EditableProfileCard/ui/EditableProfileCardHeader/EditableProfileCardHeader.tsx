import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import { getProfileData, getProfileReadonly } from '../../model/selectors';
import { updateProfileData } from '../../model/services';
import { profileActions } from '../../model/slice/profileSlice';

interface IEditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = React.memo((props: IEditableProfileCardHeaderProps) => {
  const { className } = props;
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
});
