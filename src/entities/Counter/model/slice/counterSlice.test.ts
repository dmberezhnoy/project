import { ICounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('increment', () => {
    const state: ICounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state: ICounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
