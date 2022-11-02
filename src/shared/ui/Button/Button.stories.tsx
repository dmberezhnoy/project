import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearBtnLight = Template.bind({});
ClearBtnLight.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};

export const ClearBtnDark = Template.bind({});
ClearBtnDark.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};
ClearBtnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInvertedBtnLight = Template.bind({});
ClearInvertedBtnLight.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedBtnDark = Template.bind({});
ClearInvertedBtnDark.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInvertedBtnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineBtnLight = Template.bind({});
OutlineBtnLight.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineAttentionBtnLight = Template.bind({});
OutlineAttentionBtnLight.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE_ATTENTION,
};

export const OutlineAttentionBtnDark = Template.bind({});
OutlineAttentionBtnDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE_ATTENTION,
};
OutlineAttentionBtnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineBtnDark = Template.bind({});
OutlineBtnDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};
OutlineBtnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledBtnLight = Template.bind({});
FilledBtnLight.args = {
  children: 'Button',
  theme: ButtonTheme.FILLED_INVERTED,
};

export const FilledBtnDark = Template.bind({});
FilledBtnDark.args = {
  children: 'Button',
  theme: ButtonTheme.FILLED_INVERTED,
};
FilledBtnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareBtnLightSizeL = Template.bind({});
SquareBtnLightSizeL.args = {
  children: '+',
  theme: ButtonTheme.FILLED_INVERTED,
  square: true,
};

export const SquareBtnDarkSizeL = Template.bind({});
SquareBtnDarkSizeL.args = {
  children: '+',
  theme: ButtonTheme.FILLED_INVERTED,
  square: true,
};
SquareBtnDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledOutlineBtnLight = Template.bind({});
DisabledOutlineBtnLight.args = {
  children: 'button',
  disabled: true,
  theme: ButtonTheme.OUTLINE,
};

export const DisabledOutlineBtnDark = Template.bind({});
DisabledOutlineBtnDark.args = {
  children: 'button',
  disabled: true,
  theme: ButtonTheme.OUTLINE,
};
DisabledOutlineBtnDark.decorators = [ThemeDecorator(Theme.DARK)];
