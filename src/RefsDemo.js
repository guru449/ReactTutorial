import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      //1st way of creating ref
      this.inputRef = React.createRef()
      //2nd way
      this.callbackRef = null
      this.setCallbackRef = (element) => {
        this.callbackRef = element
      }
    }
    
    handler = () => {
        alert(this.inputRef.current.value)
    }
    componentDidMount() {

        this.inputRef.current.focus()
        // if (this.callbackRef){
        //     this.callbackRef.focus()
        // }
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.setCallbackRef}></input>
        <button onClick={this.handler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
