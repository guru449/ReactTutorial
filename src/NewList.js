import React from 'react'
import Persons from './Persons'

function NewList() {
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
  return (
    <div>
        {
      persons.map(person => <Persons person = {person}/>)
        }
    </div>
  )
}

export default NewList
