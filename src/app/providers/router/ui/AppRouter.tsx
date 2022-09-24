import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={(
      <div>
        {t('Загрузка')}
        ...
      </div>
    )}
    >
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={(
              <Suspense fallback={(
                <div>
                  {t('Загрузка')}
                  ...
                </div>
              )}
              >
                <div className="page-wrapper">{element}</div>
              </Suspense>
            )}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
