import { INCREMENT_COUNTER, DECREMENT_COUNTER, SQUARE_COUNTER, CUBE_COUNTER, COUNTER_1000 } from 'constants/ActionTypes'

const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    case SQUARE_COUNTER:
      return state * state;
    case CUBE_COUNTER:
      return state * state * state;
    case COUNTER_1000:
      return state + 1000;
    default:
      return state
  }
}
