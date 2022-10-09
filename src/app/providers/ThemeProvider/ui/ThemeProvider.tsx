import React, { useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface IThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
  initialTheme = defaultTheme,
}) => {
  const [theme, setTheme] = useState(initialTheme);

  const providerValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
