import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

function AddTodos(){
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        if(!input) return
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
       <form onSubmit={addTodoHandler} className="h-fit w-full flex justify-center mb-10">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your todos..."
            className="outline-none focus:outline-none  px-4 py-2 rounded-l-lg"
            />
            <button type="submit" className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-r-lg">Add</button>
        </form>
    )

}

export default AddTodos