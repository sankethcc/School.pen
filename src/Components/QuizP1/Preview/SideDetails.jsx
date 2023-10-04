import React, { useEffect, useState } from 'react'
import edits  from '../assets/edit.png'
import axios from 'axios'
import { Box } from "@mui/material"
import { State } from '../../Context/Provider'
const SideDetails = ({heading, number}) => {
  const { questions} = State();

  return (
    
    <div className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{questions.length}</p>
      </div>
      <h3>Preview</h3>
      <Box>
       {questions?.map((data, i)=>{
        const {question, options } = data.question_container
        return(
          <div className='preview-question' key={i}>
          <img src={edits} className='edit-logo' alt="" />
          <p>{question}</p>
          <ul>
            {options.map((option, i)=>{
              const{text, image_url} = option
              return (
                <li key={i}>{text}</li>
              )
            })}
            
          </ul>
        </div>
        )
        })}

      </Box>

    </div>
  )
}

export default SideDetails
