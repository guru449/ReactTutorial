import React from 'react'

function ChildComponent(prop) {
  return (
    <div>
      <button onClick={() => prop.greetHandler('child')}>
        Click
      </button>
    </div>
  )
}

export default ChildComponent
