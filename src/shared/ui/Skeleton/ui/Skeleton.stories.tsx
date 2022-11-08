import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const RectangleLight = Template.bind({});
RectangleLight.args = {
  width: '100%',
  height: '300px',
};

export const RectangleDark = Template.bind({});
RectangleDark.args = {
  width: '100%',
  height: '300px',
};
RectangleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RectanglGreen = Template.bind({});
RectanglGreen.args = {
  width: '100%',
  height: '300px',
};
RectanglGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: '50%',
  width: 100,
  height: 100,
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  borderRadius: '50%',
  width: 100,
  height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleGreen = Template.bind({});
CircleGreen.args = {
  borderRadius: '50%',
  width: 100,
  height: 100,
};
CircleGreen.decorators = [ThemeDecorator(Theme.GREEN)];
