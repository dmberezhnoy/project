import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { LangSwitcher } from './LangSwitcher';

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const LangSwitcherLight = Template.bind({});
LangSwitcherLight.args = {};

export const LangSwitcherDark = Template.bind({});
LangSwitcherDark.args = {};
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
