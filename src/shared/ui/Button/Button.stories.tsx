import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearBtnLight = Template.bind({});
ClearBtnLight.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR,
};

export const ClearBtnDark = Template.bind({});
ClearBtnDark.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR,
};
ClearBtnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineBtnLight = Template.bind({});
OutlineBtnLight.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE,
};

export const OutlineBtnDark = Template.bind({});
OutlineBtnDark.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE,
};
OutlineBtnDark.decorators = [ThemeDecorator(Theme.DARK)];
