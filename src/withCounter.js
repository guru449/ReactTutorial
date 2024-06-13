import React from "react";
const withCounter = (WrappedComponent, incrementBy) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               counter: 0
            }
          }
      
          handler = () => {
              this.setState(prevState => {
                  return { counter: prevState.counter + incrementBy };
          })
          };
          render() {
            return (
                <div>
                    <WrappedComponent counter = {this.state.counter} incrementCount = {this.handler} {... this.props}></WrappedComponent>
                </div>
            )
          }
    }
    return WithCounter
}

export default withCounter