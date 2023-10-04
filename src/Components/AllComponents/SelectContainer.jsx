import React from 'react'
import UnstyledSelectObjectValues from '../CreateQuiz/UnstyledSelectObjectValues'
import { Box } from '@mui/system'
import { State } from '../Context/Provider'


const SelectContainer = () => {
  const { dsubject,dtopic,dstopic} = State();
  return (
    <Box 
    sx={{
            background:'#fff', width:'100%', mt:'32px', p:'56px 48px', 
            display:'grid', 
            gridTemplateColumns:{
                lg:"6fr 6fr"
            }, 
            gridGap:'24px',
            borderRadius:'40px'
        }}>
        <UnstyledSelectObjectValues dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} classList={"classChange"} add={true} value={"Class"} />
        <UnstyledSelectObjectValues dropdownName={"Subject"} listArray={dsubject} add={true} value={"Subject"}/>
        <UnstyledSelectObjectValues dropdownName={"Topic"} listArray={dtopic} add={true} value={"Topic"}/>
        <UnstyledSelectObjectValues dropdownName={"Sub topic"} listArray={dstopic}add={true} value={"Sub_topic"}/>
        <UnstyledSelectObjectValues dropdownName={"Level"} listArray={["Beginner", "Intermediate" , "Advance"]} add={false} value={"Level"}/>
        <UnstyledSelectObjectValues dropdownName={"Quiz Type"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} add={false} value={"Quiz_Type"}/>

    </Box>
  )
}

export default SelectContainer
