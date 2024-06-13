import React from "react";
const withCounter = WrappedComponent => {
    class WithCounter extends React.Component {
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
                    <WrappedComponent counter = {this.state.counter} incrementCount = {this.handler}></WrappedComponent>
                </div>
            )
          }
    }
    return WithCounter
}

export default withCounter