import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../feature/todoSlice";
import { useState } from "react";

function Todos(){
    const todos = useSelector(state => state.todos.todos)

    
    const dispatch = useDispatch()

    const [editingId, setEditingId] = useState(null)
    const [editingText, setEditingText] = useState('')

    const startEditing = (id, currentText) => {
        setEditingId(id)
        setEditingText(currentText)
    }

    const saveEditing = (id) => {
        dispatch(updateTodo({id, text: editingText}))
        setEditingId(null)
        setEditingText('')
    }

    return (
        <div>
            {todos.map((todo) => (
                // editingId === todo.id ------> it mean it is editable
                <div className="w-full flex justify-center mt-2" key={todo.id}>
                <input type="text" value={editingId === todo.id ? editingText : todo.text} readOnly={editingId !== todo.id} onChange={((e) => setEditingText(e.target.value))} className={`w-2/6 rounded-l-lg  px-4 py-2 focus:outline-none`}/>
                
                <button onClick={() =>editingId === todo.id ?  saveEditing(todo.id) : startEditing(todo.id, todo.text)} onChange={(e) => setEditable(e.target.value)} className="bg-gray-200 hover:bg-gray-300 p-2 ">{editingId === todo.id ? "🗃️": "✏️"}</button>


                <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-r-lg">❌</button>
                </div>
            ))}
        </div>
    )
}

export default Todos