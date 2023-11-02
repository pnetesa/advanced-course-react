import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa dolorem doloremque facere iste, labore laborum minima minus numquam placeat possimus quod quos tenetur totam voluptatem. Id quaerat quo sequi!',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa dolorem doloremque facere iste, labore laborum minima minus numquam placeat possimus quod quos tenetur totam voluptatem. Id quaerat quo sequi!',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
