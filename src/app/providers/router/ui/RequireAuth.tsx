import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routerConfig';

interface IRequireAuthProps {
    children: JSX.Element
}

export const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
