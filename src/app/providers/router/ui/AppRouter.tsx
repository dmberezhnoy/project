import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { IAppRouteProps, routeConfig } from 'shared/config/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: IAppRouteProps) => {
    const element = (
      <div style={{ flexGrow: 1 }}>
        <Suspense fallback={<PageLoader />}>
          {route.element}
        </Suspense>
      </div>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly
          ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
          : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>

  );
};

export default AppRouter;
