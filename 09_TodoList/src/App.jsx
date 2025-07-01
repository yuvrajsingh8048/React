import { useState, useEffect } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id:Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo: prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id)? {...prevTodo, completed: !prevTodo.completed}:prevTodo)
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className='h-svh w-full bg-gray-700 mx-auto'>
      <h1 className=' underline w-full h-fit p-4 text-center font-bold text-yellow-500 text-2xl'>Manage your Todos</h1>
      <TodoForm />

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className='w-full'> 
          <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
