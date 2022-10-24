import React from 'react';

import { Story } from '@storybook/react';

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      {story()}
    </div>
  </ThemeProvider>
);

export default ThemeDecorator;
