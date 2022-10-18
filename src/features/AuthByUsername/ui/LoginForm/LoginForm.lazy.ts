import React from 'react';

import { ILoginFormProps } from './LoginForm';

export const LoginFormLazy = React.lazy <React.FC<ILoginFormProps>>(() => import('./LoginForm'));
