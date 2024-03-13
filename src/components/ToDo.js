import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div>

      <div className='text'>{text}</div>
      <div className='icons'>
        <MdEdit className="icon" onClick={updateMode} />
        <MdDelete className="icon" onClick={deleteToDo} />

      </div>



    </div>
  )
}

export default ToDo