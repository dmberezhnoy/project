import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTypeSelector } from './ArticleTypeSelector';

export default {
  title: 'entities/Article/ArticleTypeSelector',
  component: ArticleTypeSelector,
  argTypes: {},
} as ComponentMeta<typeof ArticleTypeSelector>;

const Template: ComponentStory<typeof ArticleTypeSelector> = (args) => <ArticleTypeSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
