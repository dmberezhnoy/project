import { addDecorator } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// @ts-ignore
addDecorator(ThemeDecorator(Theme.LIGHT));
// @ts-ignore
addDecorator(StyleDecorator);
// @ts-ignore
addDecorator(RouterDecorator);
