import { CounterSchema } from '../types/counterSchema';
import { CounterReducer, CounterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            CounterReducer(state, CounterActions.decremented),
        ).toEqual({ value: 9 });
    });

    test('incremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            CounterReducer(state, CounterActions.incremented),
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(
            CounterReducer(undefined, CounterActions.incremented),
        ).toEqual({ value: 1 });
    });
});
