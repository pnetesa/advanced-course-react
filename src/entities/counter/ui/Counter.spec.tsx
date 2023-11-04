import { renderComponent } from 'shared/lib/tests/render-component';
import { Counter } from 'entities/counter';
import { screen, fireEvent } from '@testing-library/react';

describe('Counter component', () => {
  it('should get value from state', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  it('should increment value in the state', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('btn-increment'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  it('should decrement value in the state', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('btn-decrement'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
