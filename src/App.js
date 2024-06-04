// import logo from './logo.svg';
// import './App.css';
// import Greet from './components/greet';
// import Welcome  from './components/welcome';
// import Hello from './components/hello';
// import Message from './message';
// import Counter from './counter';
// import FunctionClick from './components/functionClick';
// import ClassClick from './classClick';
// import EventBind from './eventbind';
// import ParentComponent from './ParentComponent';
// import UserGreeting from './UserGreeting';
// import NewList from './NewList';
// import StyledSheets from './StyledSheets';
// import Inline from './Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './Form';
// import LifeCycleA from './LifeCycleA';
// function App() {
//   return (
//     <div className="App">
//       <LifeCycleA></LifeCycleA>
//       {/* <Form></Form> */}
//       {/* <h1 className='success'> Success</h1>
//       <h1 className={styles.error}> Failure</h1>
//       <Inline/> */}
//       {/* <StyledSheets/> */}
      
//       {/* <NewList></NewList> */}
//       {/* <UserGreeting></UserGreeting> */}
//       {/* <ParentComponent>
//       </ParentComponent> */}
//       {/* <EventBind>

//       </EventBind> */}
//       {/* <FunctionClick>

//       </FunctionClick>
//       <ClassClick>

//       </ClassClick> */}
//       {/* <Counter></Counter> */}
//       {/* <Message>
//       </Message> */}
//       {/* <Greet name="Tony Stark" hero="Iron Man">
//         <p> I am Iron Man</p>
//       </Greet> */}

//       {/* <Greet name="Tom Cruise" hero="Mission Impossible">
//         <button> Diffuse Bomb</button>
//       </Greet>
//       <Welcome name="Tony Stark" hero="Iron Man">
//         <p> I am Iron Man</p>
//       </Welcome > */}
//       {/* <Welcome name="Tom Cruise" hero="Mission Impossible">
//         <button> Diffuse Bomb</button>
//       </Welcome> */}

//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'


export class App extends Component {
  render() {
    return (
      <div>
        <LifeCycleA></LifeCycleA>
      </div>
    )
  }
}

export default App

