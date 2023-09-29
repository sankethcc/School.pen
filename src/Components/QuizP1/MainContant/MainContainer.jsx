import React, { useState } from 'react'
import profile from '../assets/profile.png'
import bell  from '../assets/bell.png'
import imports  from '../assets/imports.png'
import Language from './Language'
import FillDetails from './FillDetails'
import InputQuestion from './InputQuestion'
import ProfileWrapper from './ProfileWrapper'

const MainContainer = (props,{close, toggleMenu}) => {
  const [input, setInput] = useState([])
  const [quest, setquest] = useState([])
  const onChange = (e)=>{
    setInput(e.target.value)
  }
  const setchange = (e) => {
    setquest(e)
  }
  const post = () => {
    props.passvalue(input,quest)
  }
  return (
    <div className="main-container">
            <ProfileWrapper toggleMenu={toggleMenu} close={close} />
            <Language />
            <FillDetails />
            <div className="question-wrapper">
                <h3>Question</h3>
                <div className="input-question">
                  <input  placeholder='Question' className="text-field" type="text" onChange={onChange} value={input} />
                  <img className="imports" src={imports} alt="" />
                </div>
                <h3>Options:</h3>
                <div>
                  <InputQuestion passinput={ setchange} />
                  <InputQuestion passinput={ setchange}/>
                  <InputQuestion passinput={ setchange}/>
                  <InputQuestion passinput={ setchange}/>
                  
                </div>
                <p className="add-another">Add another option</p>
            </div>
            <div className="btn-div">
              <button onClick={post}>Post</button>
            </div>
        </div>
  )
}

export default MainContainer
