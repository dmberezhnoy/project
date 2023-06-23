import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { to: '/', children: 'AppLink' },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryAppLinkLight = Template.bind({});
PrimaryAppLinkLight.args = {};

export const PrimaryAppLinkDark = Template.bind({});
PrimaryAppLinkDark.args = {};
PrimaryAppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryAppLinkLight = Template.bind({});
SecondaryAppLinkLight.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryAppLinkDark = Template.bind({});
SecondaryAppLinkDark.args = {
  theme: AppLinkTheme.SECONDARY,
};
SecondaryAppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
