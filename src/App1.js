import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  { data } from "./data"
import {nanoid} from "nanoid"

export default function App1(){
    const [notes, setNotes] = React.useState([])
    const [currentNoteId , setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
        


    )
}