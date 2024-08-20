import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
     // parent element needs to have a unique key todoIndex
     <li className="todoItem">
        {children}
        <div className="actionsContainer">
            <button onClick={() => {
                handleEditTodo(index)
            }}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
            <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
     </li>
  )
}  
