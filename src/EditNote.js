import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function EditNote()
{

    return(
        <div>
        <form>
          <textarea placeholder = 'Write your Notes' ></textarea>
          <br/>
        <button className="btn btn-success">Submit</button>
        </form>

       </div>
    )
}