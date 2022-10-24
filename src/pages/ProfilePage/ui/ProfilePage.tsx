import React from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';

interface IProfilePageProps {
}
const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: React.FC<IProfilePageProps> = () => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [])}>
        {t('Страница профиля')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
