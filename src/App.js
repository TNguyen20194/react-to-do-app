import { useState, useEffect } from 'react'
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const[todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos : newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    // update newTodoList
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueTobeEdited = todos[index]
    setTodoValue(valueTobeEdited)

    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}  todos={todos}/>
    </>
  );
}

export default App;
