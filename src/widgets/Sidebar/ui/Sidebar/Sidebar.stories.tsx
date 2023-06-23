import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const mockAuthUser = {
  _initialized: true,
  authData: {
    id: '1',
    username: 'username',
  },
};

const mockEmptyUser = {
  _initialized: true,
};

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLightAuth = Template.bind({});
SidebarLightAuth.decorators = [StoreDecorator({
  user: mockAuthUser,
})];

export const SidebarDarkAuth = Template.bind({});
SidebarDarkAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: mockAuthUser,
})];

export const SidebarLightNoAuth = Template.bind({});
SidebarLightNoAuth.decorators = [StoreDecorator({
  user: mockEmptyUser,
})];

export const SidebarDarkNoAuth = Template.bind({});
SidebarDarkNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: mockEmptyUser,
})];
