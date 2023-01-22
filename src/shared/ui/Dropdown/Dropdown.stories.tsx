import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

const items = [
  { content: 'Один' },
  { content: 'Два', disabled: true },
  { content: 'Три' },
];

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {},
  args: {
    trigger: <Button>Open</Button>,
    items,
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
