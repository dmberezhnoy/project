import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/ui/Text';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string}>();

  if (!id) {
    return <Text text={t('Профиль не найден')} theme={TextTheme.ERROR} />;
  }

  return (
    <Page className={classNames('', {}, [])}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
