import React, { Component } from "react";

//we use this key word for class component
//try to use functioncal component (greet.js) wherever you can rather than class componenet like this
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello Visitor"
        }
    }

    subscribedMessage()  {
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={ () => this.subscribedMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message