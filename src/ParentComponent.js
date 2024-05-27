import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Parent"
      }
      this.greetMessage = this.greetMessage.bind(this)
    }
    
    greetMessage(param) {
        alert(`Hello ${this.state.message} from ${param}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetMessage}>
        </ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
