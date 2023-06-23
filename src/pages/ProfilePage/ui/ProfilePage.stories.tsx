import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const mockData = {
  username: 'admin',
  firstName: 'Дима',
  lastName: 'Бережной',
  country: Country.Russia,
  currency: Currency.RUB,
  age: 23,
  city: 'Samara',
  avatar,
};

export const ProfilePageLight = Template.bind({});
ProfilePageLight.decorators = [
  StoreDecorator({
    profile: {
      formData: mockData,
    },
  })];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      formData: mockData,
    },
  })];
