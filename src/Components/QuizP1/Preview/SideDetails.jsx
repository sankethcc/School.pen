import React, { useEffect, useState } from 'react'
import edits  from '../assets/edit.png'
import axios from 'axios'
import { Box } from "@mui/material"
import { State } from '../../Context/Provider'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
        {questions?.map((data, i) => {
          // console.log(data)
        const {question, options } = data
          return (
          // <textarea className='preview-question'>
          <div className='preview-question' key={i}>
          {/* <img src={edits} className='edit-logo' alt="" /> */}
            <p>{question}</p>
            
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {options.map((option, i)=>{
                const text = option.text
                return(
                  <FormControlLabel disabled value="female" control={<Radio />} label={text} />
                  
                )
              })}
            </RadioGroup>
          </FormControl>
              </div>
          // </textarea>
        )
        })}

      </Box>

    </div>
  )
}

export default SideDetails