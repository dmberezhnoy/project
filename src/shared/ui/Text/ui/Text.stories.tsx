import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  args: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextError = Template.bind({});
TextError.args = {
  title: 'Title text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repellat.',
  theme: TextTheme.ERROR,
};

export const TextErrorDark = Template.bind({});
TextErrorDark.args = {
  title: 'Title text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repellat.',
  theme: TextTheme.ERROR,
};
TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextLight = Template.bind({});
TextLight.args = {
  title: 'Title text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repellat.',
};

export const TextDark = Template.bind({});
TextDark.args = {
  title: 'Title text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repellat.',
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = {
  title: 'Title text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repellat.',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repellat.',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
