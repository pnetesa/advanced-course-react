import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const DarkLoginModal: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
