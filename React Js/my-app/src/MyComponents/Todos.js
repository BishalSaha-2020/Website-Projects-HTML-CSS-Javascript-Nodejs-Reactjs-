import React from 'react'
import Todo from './Todo'
export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-4">Todo List</h3>
            {props.todos.map((todo)=>{
                return (
                    <div>
                    <h2>Hello!</h2>
                    <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    </div>
                )
            })}
         
        </div>
    )
}
