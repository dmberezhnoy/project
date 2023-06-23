import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import avatar from '@/shared/assets/tests/avatar.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: avatar,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});

export const AvatarWithSize = Template.bind({});
AvatarWithSize.args = {
  size: 50,
};
