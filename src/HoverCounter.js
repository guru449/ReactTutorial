import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
  render() {
    const { counter, incrementCount, name } = this.props; // Destructure props

    return (
      <div>
         <div>
        <h2 onMouseOver={incrementCount}> Mouse Hovered {counter} times by {name}</h2>
      </div>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 5)
