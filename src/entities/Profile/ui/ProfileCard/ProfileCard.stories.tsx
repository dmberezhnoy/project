import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  profile: {
    username: 'admin',
    firstName: 'Дима',
    lastName: 'Бережной',
    country: Country.Russia,
    currency: Currency.RUB,
    age: 23,
    city: 'Samara',
    avatar,
  },
};

export const DefaultCardDark = Template.bind({});
DefaultCardDark.args = {
  profile: {
    username: 'admin',
    firstName: 'Дима',
    lastName: 'Бережной',
    country: Country.Russia,
    currency: Currency.RUB,
    age: 23,
    city: 'Samara',
    avatar,
  },
};
DefaultCardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingCard = Template.bind({});
LoadingCard.args = {
  isLoading: true,
};

export const LoadingCardDark = Template.bind({});
LoadingCardDark.args = {
  isLoading: true,
};
LoadingCardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithErrorCard = Template.bind({});
WithErrorCard.args = {
  error: 'error',
};

export const WithErrorCardDark = Template.bind({});
WithErrorCardDark.args = {
  error: 'error',
};
WithErrorCardDark.decorators = [ThemeDecorator(Theme.DARK)];
