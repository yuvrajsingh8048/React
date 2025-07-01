import React from "react";
import { useTodo } from "../context/TodoContext";
import { useState } from "react";

function TodoForm(){
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;
        addTodo({todo, completed: false})
        setTodo("")
    }


    return (
         <form onSubmit={add} className="flex justify-center mt-5 mb-10">
            <div className="flex">
            <input type="text" placeholder="Enter your todos" value={todo} onChange={(e) => setTodo(e.target.value)}
            className="border border-r-0 px-4 py-2 rounded-1-md focus:outline-none rounded-l-md"
            />
            <button type="submit" className="bg-blue-500 font-bold text-white px-4 py-2 rounded-r-md">Add</button>
            </div>
       </form>
    )
}

export default TodoForm