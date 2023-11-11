import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta = {
  title: 'shared/LoginForm',
  component: LoginForm,
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'user',
        password: '1234',
      },
    }),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
        username: 'user1234',
        password: '1234',
      },
    }),
  ],
};

export const WithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        error: 'Invalid login or password',
        username: 'user1234',
        password: '1234',
      },
    }),
  ],
};

export const DarkLoginModal: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
