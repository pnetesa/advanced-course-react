import { type ReactNode } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { i18nForTests } from 'shared/config/i18n/tests';
import { MemoryRouter } from 'react-router-dom';

export interface RenderWithRouterOptions {
  route?: string;
}

export function renderComponent(component: ReactNode, options: RenderWithRouterOptions = {}): RenderResult {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>,
    </MemoryRouter>,
  );
}
