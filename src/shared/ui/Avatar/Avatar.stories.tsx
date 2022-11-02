import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: 'https://roninyurka.ru/wp-content/uploads/2021/09/chto-takoe-javascript.jpg',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});

export const AvatarWithSize = Template.bind({});
AvatarWithSize.args = {
  size: 50,
};
