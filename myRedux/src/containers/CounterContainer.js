import React from 'react'
import PropTypes from 'prop-types'
import { Counter } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'actions/counter'

class CounterContainer extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    makeSquare: PropTypes.func.isRequired,
    makeCube: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  incrementIfOdd = () => {
    this.props.incrementIfOdd()
  }

  makeSquare = () => {
    this.props.makeSquare()
  }

  makeCube = () => {
    this.props.makeCube()
  }

  increaseBy1000 = () => {
    this.props.increaseBy1000()
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
        makeSquare={this.makeSquare}
        makeCube={this.makeCube}
        increaseBy1000={this.increaseBy1000}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  counter: createSelector(
    (state) => state.counter,
    (counterState) => counterState
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
