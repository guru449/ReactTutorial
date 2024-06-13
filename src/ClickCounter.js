import React, { Component } from 'react'
import withCounter from './withCounter'
export class ClickCounter extends Component {
  render() {
    const { counter, incrementCount } = this.props; // Destructure props

    return (
      <div>
        <button onClick={this.propsincrementCount} >Clicked {this.props.counter} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)
