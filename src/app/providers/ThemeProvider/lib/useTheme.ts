import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeReturnType {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeReturnType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.GREEN;
      break;
    case Theme.GREEN:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme: theme || Theme.LIGHT,
  };
};
