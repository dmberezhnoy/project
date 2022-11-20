import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {},
  args: {
    comment: {
      id: '1',
      text: 'some text comment',
      createdDate: '20.11.2022',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg',
      },
    },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Green = Template.bind({});
Green.decorators = [ThemeDecorator(Theme.GREEN)];
export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
