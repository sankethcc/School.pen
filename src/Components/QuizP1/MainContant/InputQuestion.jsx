import React, { useState } from 'react'

import imports  from '../assets/imports.png'
import dlt  from '../assets/dlt.png'

const InputQuestion = () => {
  // control component 
  const [input, setInput] = useState()
  const onChange = (e)=>{
    setInput(e.target.value)
  }
  return (
    // creating MCQ options 
    <div className="input-question">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
        <input placeholder='Option A' className="text-field" type="text" onChange={onChange} value={input} />
        <img className="imports" src={imports} alt="" />
        <img className="dlt" width ="32.375px" height="37px" src={dlt} alt="" />
    </div>
  )
}

export default InputQuestion
