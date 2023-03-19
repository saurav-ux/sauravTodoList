import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
       {/* <TodoItem todo ={props.todos[0]}/>    */}
       {props.todos.length === 0? "No Todos is Display":
       props.todos.map((item)=>{
          return ( 
            <>
                <TodoItem  todo ={item}  key ={item.sno} onDelete  = {props.onDelete}/>  
          </> 
           )
       })} 
              
    </div>
  )
}

export default Todos

