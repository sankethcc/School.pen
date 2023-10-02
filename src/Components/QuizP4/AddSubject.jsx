import React from 'react'
import ProfileWrapper from '../QuizP1/MainContant/ProfileWrapper'
import DropDown from '../QuizP1/MainContant/DropDown'
import AccordianAdd from './AccordianAdd'
import { Box, TextField } from '@mui/material'

const AddSubject = ({toggleMenu, close}) => {
  return (
    <Box >
        {/* <ProfileWrapper toggleMenu={toggleMenu} close={close} name="Create Subject" /> */}
        {/* <Box
        sx={{
          display:'flex',
          justifyContent:'space-between',
          pt:'48px'
        }}
        >
        <DropDown dropdownName={"Class"} listArray={["Science", "Mathematics", "History"]} add={true}/>

        <TextField id="outlined-basic" label="Search subject" variant="outlined" 
        sx={{
          bgcolor:"#fff",
          borderRadius:'12px',
          
        }}
        />
        </Box> */}
        
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
            subject="English" 
            SubSubject={[]} 
            topics={[]}
        
        />
        </Box>
        
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
            subject="English" 
            SubSubject={[]} 
            topics={[]}
        
        />
        </Box>

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
            subject="English" 
            SubSubject={[]} 
            topics={[]}
        
        />
        </Box>
        
    </Box>
  )
}

export default AddSubject
