import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <h1>{t('Основная страница')}</h1>
  );
};

export default MainPage;
