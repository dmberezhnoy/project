import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'Type text',
    value: '',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});

export const InputDark = Template.bind({});
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
