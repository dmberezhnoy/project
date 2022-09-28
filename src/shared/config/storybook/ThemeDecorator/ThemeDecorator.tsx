import React from 'react';

import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
  <div className={`app ${theme}`}>
    {story()}
  </div>
);

export default ThemeDecorator;
