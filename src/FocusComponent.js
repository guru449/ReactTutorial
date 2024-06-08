import React, { Component } from 'react'
import Input from './Input'

class FocusComponent extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    
    handler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.handler}>Focus Component</button>
      </div>
    )
  }
}

export default FocusComponent
