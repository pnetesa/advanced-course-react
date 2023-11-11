import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';
import { getCounter, getCounterValue } from './selectors';

describe('getCounter()', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});

describe('getCounterValue()', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
