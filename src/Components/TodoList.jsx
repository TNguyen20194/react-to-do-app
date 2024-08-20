import React from 'react'
import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const {todos} = props
  return (
    <ul className="main">
        {todos.map((todo, todoIndex) => {
            //interate over the todos list and print out the items
            return (
               <TodoCard {...props} key={todoIndex} index={todoIndex}>
                <p>{todo}</p>
               </TodoCard>
            )
        }
        )}
    </ul>
  )
}
