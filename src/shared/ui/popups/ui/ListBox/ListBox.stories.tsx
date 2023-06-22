import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ListBox from './ListBox';

const options = [
  { value: 'Первая опция', content: 'Первая опция' },
  { value: 'Вторая опция', content: 'Вторая опция' },
  { value: 'Третья опция', content: 'Третья опция' },
  { value: 'Четвертая опция', content: 'Четвертая опция', disabled: true },
];

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {},
  args: {
    items: options,
    onChange: (value) => console.log(value),
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
