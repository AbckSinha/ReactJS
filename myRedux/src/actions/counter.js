import { INCREMENT_COUNTER, DECREMENT_COUNTER, SQUARE_COUNTER, CUBE_COUNTER, COUNTER_1000 } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const increment = createAction(INCREMENT_COUNTER)

export const decrement = createAction(DECREMENT_COUNTER)

export const square1 = createAction(SQUARE_COUNTER)

export const cube1 = createAction(CUBE_COUNTER)

export const incrementBy1000 = createAction(COUNTER_1000)

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function makeSquare() {
  return (dispatch, getState) => {
    let { square } = getState()
    if (square) {
      return square * square
    }
    dispatch(square1())
  }
}



export function makeCube() {
  return (dispatch, getState) => {
    let { cube } = getState()
    if (cube) {
      return cube * cube * cube
    }
    dispatch(cube1())
  }
}

export function increaseBy1000() {
  return (dispatch, getState) => {
    let { number } = getState()
    if (number) {
      return number+1000;
    }
    dispatch(incrementBy1000())
  }
}