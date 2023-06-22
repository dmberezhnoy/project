import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageLight = Template.bind({});
MainPageLight.args = {};
MainPageLight.decorators = [StoreDecorator({})];

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
