
import React from 'react'
import Tododata from './Tododata'
function TodoList() {

     const [data,setData] = React.useState(Tododata)
    // function Delete()
    const Delete = (data)=>{

    
    
      setData(data.filter((e)=>{
        return e!==data
      }))
        
    }
  return (

    <>
     
     { data.map((item)=>{
       
      return [<p>{item.title}</p>,<p>{item.desc}</p>,  <button className='btn btn-danger btn-sm' onClick={()=>{Delete(data)}}>Delete</button>,<br/>,<br/>]    
        
     })} 

   
    </>
  )
}

export default TodoList

