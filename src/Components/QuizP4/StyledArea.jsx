import { Box, Input } from '@mui/material'
import React from 'react'
import CustomizedDividers from './CustomizedDividers'


const StyledArea = () => {
    
  return (
    <Box
    sx={{position:'relative'}}
    >
        <Input
        sx={{
            height:'205px',
            background:'#F5F6F7',
            width:'100%',
            padding:'32px 32px',
            borderRadius:'24px',
            fontSize:'15px',
            "::after": {
                border:'none',
              },
            "::before": {
                border:'none',
              },
            '&:hover:before':{
                border:'none !important',
            }

        }}
        />
        <Box
            sx={{
                position:'absolute',
                top:'32px',
                right:'32px'
            }}
        >
            <CustomizedDividers />
        </Box>
    </Box>
  )
}

export default StyledArea
