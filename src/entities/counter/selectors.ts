import { type StateSchema } from 'app/providers/store-provider';
import { type CounterSchema } from './model/types';
import { createSelector } from '@reduxjs/toolkit';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
