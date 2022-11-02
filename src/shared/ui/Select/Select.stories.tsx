import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    options: [
      { value: '1', content: 'Первый' },
      { value: '2', content: 'Второй' },
      { value: '3', content: 'Третий' },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDefault = Template.bind({});
SelectDefault.args = {
  label: 'Выберите опцию',
};
