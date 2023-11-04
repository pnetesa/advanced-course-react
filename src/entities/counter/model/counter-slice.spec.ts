import { counterReducer, counterActions } from './counter-slice';
import { type CounterSchema } from 'entities/counter';

describe('counterSlice()', () => {
  it('should increment value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  it('should decrement value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  it('should work with an empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
