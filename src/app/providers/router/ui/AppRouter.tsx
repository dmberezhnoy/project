import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          )}
          path={path}
        />
      ))}
    </Routes>

  );
};

export default AppRouter;
