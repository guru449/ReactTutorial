import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           counter: 0
        }
      }
  
    handler = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 };
    })
    };
  render() {
    return (
      <div>
         <div>
        <h2 onMouseOver= {this.handler}>Mouse Hovered {this.state.counter} times</h2>
      </div>
      </div>
    )
  }
}

export default HoverCounter
