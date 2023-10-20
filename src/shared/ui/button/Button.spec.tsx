import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/button/Button';

describe('Button component', () => {
  it('should render button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  it('should render button with clear css class', () => {
    render(<Button className={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
