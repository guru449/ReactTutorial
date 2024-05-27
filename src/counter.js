import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }
     
    //Callback function
    // updateCount() {
    //     this.setState(
    //         {
    //             counter: this.state.counter + 1
    //         }, () => console.log(this.state.counter))
        
    // }

    //to pass states, pass as function rather than objects
    updateCount() {
        this.setState
            (prevState => ({
                counter: prevState.counter + 1
            })
            , () => console.log(this.state.counter))
    
    }


    updateFiveCount() {
        this.updateCount()
        this.updateCount()
        this.updateCount()
        this.updateCount()
        this.updateCount()
    }
  render() {
    return (
      <div>
        <h1> Counter - {this.state.counter}</h1>
        <button onClick={() => { this.updateFiveCount() }} >
            Count
        </button>
      </div>
    )
  }
}

export default Counter
