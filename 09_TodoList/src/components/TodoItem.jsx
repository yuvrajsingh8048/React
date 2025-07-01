import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({todo}){
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {deleteTodo, updateTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo:todoMsg})
        setIsTodoEditable(false)
    }

    const checkToggleComplete = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className={`flex justify-center items-center w-full duration-300 mb-2`}>

            <div className="flex w-7/12 justify-center">

                <input type="checkbox"  checked={todo.completed} onChange={checkToggleComplete}
                className="mt-4 r h-5 w-5 cursor-pointer"/>

                <input type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)}
                className={`w-1/2 mx-4 focus:outline-none outline-none px-4 font-semibold py-2 rounded-lg  ${todo.completed ? "line-through": ""}
                ${isTodoEditable ? "border border-black" : ""}
                `}
                readOnly={!isTodoEditable}
                />
                <button 
                onClick={() => {
                    if(todo.completed) return
                    if(isTodoEditable){
                        editTodo()
                    }
                    else{
                        setIsTodoEditable((prev) => !prev)
                    }
                }}
                className="bg-white p-3 mr-4 rounded-md ">{isTodoEditable ? "🗃️" : "✏️"}</button>
                <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-white p-3 mr-4 rounded-md ">❌</button>
            </div>
        </div>
    )
}

export default TodoItem