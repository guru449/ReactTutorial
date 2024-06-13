import React, { Component } from 'react'

export class ClickCounter extends Component {
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
        <button onClick= {this.handler}>Clicked {this.state.counter} times</button>
      </div>
    )
  }
}

export default ClickCounter
