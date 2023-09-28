import React from 'react'
import ProfileWrapper from '../QuizP1/MainContant/ProfileWrapper'
import DropDown from '../QuizP1/MainContant/DropDown'
import AccordianAdd from './AccordianAdd'
import { Box } from '@mui/material'

const AddSubject = ({toggleMenu, close}) => {
  return (
    <div className="main-container">
        <ProfileWrapper toggleMenu={toggleMenu} close={close} />
        <Box
        sx={{
            backgroundColor:'#fff',
            p:'12px 48px',
            borderRadius:'12px',
            mt:'32px',
            fontWeight:'700'
        }}
        >
        <AccordianAdd 
            subject="Science" 
            SubSubject={['Chemitry', 'Biology', 'Physics', 'Earth Science', 'Astronomy']} 
            topics={['Element', "Chemical Reactions", 'Organic chemistry']}
        
        />

        </Box>
    </div>
  )
}

export default AddSubject
