import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { getUserRoles } from '@/entities/User/model/selectors/getUserRoles/getUserRoles';
import { UserRole } from '@/entities/User/model/types/user';
import { RoutePath } from '@/shared/config/routerConfig';

interface IRequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export const RequireAuth: React.FC<IRequireAuthProps> = ({ children, roles }) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles?.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};
