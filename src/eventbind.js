import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      //this.changeEvent = this.changeEvent.bind(this)
    }
    
    // changeEvent() {
    //     this.setState({
    //         message: "GoodBye"
    //     }) 
    // }
    changeEvent = () => {
        this.setState({
            message: "Goodbye"
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeEvent}>Click</button> 
        
        {/* <button onClick={this.changeEvent.bind(this)}>Click</button>  */}
        

        {/* <button onClick={() => { this.changeEvent()}}>Click</button>  */}

        {/* <button onClick={() => { this.changeEvent()}}>Click</button>  */}


      </div>
    )
  }
}

export default EventBind
