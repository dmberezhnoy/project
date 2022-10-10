import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <h1>{t('Основная страница')}</h1>
      <br />
      <hr />
      <br />
      <Counter />
    </>
  );
};

export default MainPage;
