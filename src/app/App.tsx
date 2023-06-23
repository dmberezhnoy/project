import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { getUserInitialized, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();
  const isInitializedUser = useSelector(getUserInitialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isInitializedUser && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
