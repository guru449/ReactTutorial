import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
  render() {
    const { counter, incrementCount } = this.props; // Destructure props

    return (
      <div>
         <div>
        <h2 onMouseOver={incrementCount}>Mouse Hovered {counter} times</h2>
      </div>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
