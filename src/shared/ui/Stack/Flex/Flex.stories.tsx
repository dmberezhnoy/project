import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const blocks = (
  <>
    <div>First block</div>
    <div>Second block</div>
    <div>Third block</div>
  </>
);

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children: blocks,
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: blocks,
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: blocks,
};
