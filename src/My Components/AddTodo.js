import React from "react"
import { useState } from 'react';

function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function submit(e)
    {
          e.preventDefault()
          if(!title || !desc){
            alert("Please Fill Title or Desc")
          }
          else{
            alert("Saved Successfully");
            props.addTodo(title , desc)
            setTitle("")
            setDesc("")
          }        
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
      <form  onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" minLength={3} maxLength={17} required/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <textarea type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"  required />
  </div>
  
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
