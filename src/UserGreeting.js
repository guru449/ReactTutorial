import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
   return this.state.isLoggedIn ?  ( 
    <div>
        Welcome Guru
    </div>
   ) :
    (
    <div>
        Welcome Guest
    </div>

   )
    
  }
}

export default UserGreeting
