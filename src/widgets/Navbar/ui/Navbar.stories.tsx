import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.decorators = [StoreDecorator({ user: undefined })];

export const NavbarDark = Template.bind({});
NavbarDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: undefined })];

const authData = {
  id: '1',
  username: 'username',
};
export const NavbarLightAuth = Template.bind({});
NavbarLightAuth.decorators = [StoreDecorator({
  user: { authData },
})];

export const NavbarDarkAuth = Template.bind({});
NavbarDarkAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData } })];
