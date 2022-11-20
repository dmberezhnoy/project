import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {},
  args: {
    comments: [
      {
        id: '1',
        text: 'some text comment',
        createdDate: '20.11.2022',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg',
        },
      },
      {
        id: '2',
        text: 'some2 text2 comment2',
        createdDate: '21.11.2022',
        user: {
          id: '2',
          username: 'user',
          avatar: 'https://coolsen.ru/wp-content/uploads/2021/06/17-7.jpg',
        },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Green = Template.bind({});
Green.decorators = [ThemeDecorator(Theme.GREEN)];
export const IsLoading = Template.bind({});
IsLoading.args = { isLoading: true };
export const EmptyComments = Template.bind({});
EmptyComments.args = { comments: [] };
