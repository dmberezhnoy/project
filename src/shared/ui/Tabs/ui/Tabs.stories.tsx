import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    { value: 'Первый вариант', content: 'Первый вариант' },
    { value: 'Второй вариант', content: 'Второй вариант' },
    { value: 'Вариант 3', content: 'Вариант 3' },
  ],
  value: 'Вариант 3',
  onTabClick: action('onTabClick'),
};
