import React from 'react'

// function Greet() {
//     return <h1> Hello Guru </h1>
// }

//if you have multiple lines you have to use curly braces and return statement
// jsx should have only one div
const Greet = (props) => {
    const { name, hero } = props
    return (

        <div>
            <h1> Hello {name} aka {hero}</h1>
            {props.children}
        </div>
    )

}

export default Greet