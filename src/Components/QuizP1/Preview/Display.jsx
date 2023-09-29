import React from "react";
import edits  from '../assets/edit.png'

const Note=(props)=>{
    return (<>
    <div className='preview-question'>
        <img src={edits} className='edit-logo' alt="" />
        <p>{props.input }</p>
        <ul>
          <li>{props.quest}</li>
          <li>Chandrapur</li>
          <li>Karnataka</li>
          <li>Tamil Nadu</li>
        </ul>
      </div>
    </>
  )};

export default Note;