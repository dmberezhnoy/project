import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  args: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const store = {
  loginForm: {
    username: '123', password: '4444',
  },
};

export const LoginFormLight = Template.bind({});
LoginFormLight.decorators = [StoreDecorator(store)];

export const LoginFormDark = Template.bind({});
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(store)];

export const WithLoadingLight = Template.bind({});
WithLoadingLight.decorators = [StoreDecorator({ loginForm: { ...store.loginForm, isLoading: true } })];

export const WithLoadingDark = Template.bind({});
WithLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { ...store.loginForm, isLoading: true } })];

export const WithErrorLight = Template.bind({});
WithErrorLight.decorators = [StoreDecorator({ loginForm: { ...store.loginForm, error: 'Error text' } })];

export const WithErrorDark = Template.bind({});
WithErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { ...store.loginForm, error: 'Error text' } })];
