import './App.css';
import React from 'react';
import AddTodo from './My Components/AddTodo';
import Header1 from './My Components/Header1';
import Todos from './My Components/Todos';
import About from './My Components/About';
import Footer from './My Components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  // let initTodo
  // if(localStorage.getItem("todos" === null))
  // {
  //   initTodo = []
  // }
  // else{
  //   initTodo =JSON.parse(localStorage.getItem("todos"))
  // }
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



 function onDelete(todo)
 {
  setTodos(todos.filter((e)=>{
    return e!==todo
  }))
  localStorage.setItem("todos", JSON.stringify(todos));
  // localStorage.setItem("todos" , JSON.stringify(todos))
 }


function addTodo(title, desc)
{
  console.log("I am adding this todo",title ,desc)
  let sno
  if(todos.length === 0)
  {
    sno =0
  }
  else
  {
   sno = todos[todos.length -1].sno +1
  }
  
  const myTodo ={
    sno : sno,
    title:title,
    desc:desc
  }
  console.log(myTodo)
  setTodos([...todos , myTodo])
}

 const [todos,setTodos] =  useState(initTodo);
 
 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])
// React.useEffect(()=>{
//     localStorage.setItem("todos",JSON.stringify(todos))
// },[todos])
  return (
    <>
    <Router>
      <Header1/>
      <Switch>
      <Route exact path="/" render={()=>{
        return(
          <>
               <AddTodo addTodo ={addTodo}/> 
               <Todos todos={todos} onDelete = {onDelete}/>
           </>
        )
      }}>
          
          </Route>
          <Route exact path="/about">
            <About />
          </Route>                 
        </Switch>
   <Footer/>
   </Router>
   </>
  )
}

export default App;
