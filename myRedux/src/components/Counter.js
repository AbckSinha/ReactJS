import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Intro = styled.p`font-size: large;`

function Counter({ increment, incrementIfOdd, decrement, counter, makeSquare, makeCube, square, increaseBy1000 }) {
  return (
    <section>
      <p>
        Clicked: {counter} times <button onClick={increment}>+</button> <button onClick={decrement}>-</button>{' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
      <p>click here to Square the counter &nbsp;<button onClick={makeSquare}>Square</button> {counter}</p>
      <p>click here to Cube the counter &nbsp;<button onClick={makeCube}>Cube</button> {counter}</p>
      <p>click here to see counter increases by 1000 &nbsp;<button onClick={increaseBy1000}>IncreaseBy1000</button> {counter}</p>
    </section>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  makeSquare: PropTypes.func.isRequired,
  makeCube: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

export default pure(Counter)
