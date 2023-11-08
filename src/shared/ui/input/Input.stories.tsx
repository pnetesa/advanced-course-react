import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123',
  },
};

export const DarkInput: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
