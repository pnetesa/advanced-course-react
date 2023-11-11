import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Lorem ipsum',
    text: 'Dolor sit amet, consectetur adipisicing elit. Commodi, omnis.',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem ipsum',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Dolor sit amet, consectetur adipisicing elit. Commodi, omnis.',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Lorem ipsum',
    text: 'Dolor sit amet, consectetur adipisicing elit. Commodi, omnis.',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Lorem ipsum',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Dolor sit amet, consectetur adipisicing elit. Commodi, omnis.',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const Error: Story = {
  args: {
    title: 'Lorem ipsum',
    text: 'Dolor sit amet, consectetur adipisicing elit. Commodi, omnis.',
    theme: TextTheme.ERROR,
  },
};
