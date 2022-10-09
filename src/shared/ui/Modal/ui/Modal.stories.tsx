import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
  args: {
    onClose: () => console.log(''),
    isOpen: true,
    children: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nobis!
      </span>
    ),
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});

export const ModalDark = Template.bind({});
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
