import { type FC } from 'react';
import { Button } from 'shared/ui/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/counter-slice';
import { getCounterValue } from 'entities/counter/selectors';
export const Counter: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="btn-increment">
        +
      </Button>
      <Button onClick={decrement} data-testid="btn-decrement">
        -
      </Button>
    </div>
  );
};
