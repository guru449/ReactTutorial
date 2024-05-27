import React, { Component } from "react";

//we use this key word for class component
//try to use functioncal component (greet.js) wherever you can rather than class componenet like this
class Welcome extends Component {
    render() {
        const {name, hero} = this.props
        return (
            <div>
                <h1> Welcome {name} aka {hero}</h1>
                {this.props.children}
            </div>
        )
       
    }
}

export default Welcome