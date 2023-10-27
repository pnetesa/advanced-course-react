/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar';
import { renderComponent } from 'shared/lib/tests/render-component';

describe('Sidebar component', () => {
  it('should render Sidebar', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    // screen.debug();
  });

  it('should toggle', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // screen.debug();
  });
});
