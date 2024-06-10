import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.parentRef = React.createRef()
    }
    
    handler = () => {
        this.parentRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRInput ref={this.parentRef}></FRInput>
        <button onClick={this.handler}>Click here!</button>
      </div>
    )
  }
}

export default FRParent
