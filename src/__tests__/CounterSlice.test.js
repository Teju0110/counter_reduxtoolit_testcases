import counterReducer, { decrement, increment } from '../Store/Counter.Slice';

describe('counterSlice Reducer', () => {
  const initialState = {
    value: 0,
  };

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should handle increament', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it('should handle decreament', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(-1);
  });
});
