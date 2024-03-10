import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const ToDo = ({ text, updateMode, deleteToDo }) => {


  return (
    <div>ToDo

      <div className='text'>{text}</div>
      <div className='icons'>
        <MdEdit className="icon" />
        <MdDelete className="icon" />

      </div>



    </div>
  )
}

export default ToDo