// import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
 

  return (
    <div className='h-svh w-full bg-gray-800 '>
      <h1 className='h-fit w-full p-4 text-3xl font-bold text-yellow-500 underline text-center mb-10'>Todo Project with the help of redux toolkit</h1>
     <AddTodos />
     <Todos />
      
    </div>
  )
}

export default App
