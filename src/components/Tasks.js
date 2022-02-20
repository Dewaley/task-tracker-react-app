import React from 'react'

const Tasks = ({todos}) => {
  return (
    todos.map((todo)=> (
      <h1>{todo.text}</h1>
  ))
  )
}

export default Tasks