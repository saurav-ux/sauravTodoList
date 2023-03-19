import React from "react";
import EditNote from "./EditNote";
export default function AddNote()
{
    const [item,setItem] = React.useState([])
    function addItem()
    {
         setItem(prevD=>{
         return [...prevD,"Item "+(prevD.length+1)]
         })
    }
  
    const itemElement = item.map(thing =>
      <div>
           <p key={thing}>{thing}</p>  
           <EditNote />

      </div>
       )
   
    return(
        <div>
            
        <button onClick ={addItem}>Add Item</button>
        {itemElement}
        </div>
    )
}