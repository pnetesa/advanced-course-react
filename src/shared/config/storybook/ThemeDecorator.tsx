import 'app/styles/index.scss';
import { type StoryFn } from '@storybook/react';
import { type Theme } from 'app/providers/theme-provider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn): JSX.Element => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
