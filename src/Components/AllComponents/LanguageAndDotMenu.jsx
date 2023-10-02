import { Button, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import UnstyledSelectObjectValues from '../CreateQuiz/UnstyledSelectObjectValues'
const style ={
    dflex:{
        display:'flex'
    },
    bellIcon:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}

const LanguageAndDotMenu = ({handleThreeDotMenu, handleOpenPageNameUpdate}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <Box sx={{pt:'40px'}}>
    <Box style={style.dflex} sx={{justifyContent:'space-between', }}>
        <Box>
            <UnstyledSelectObjectValues dropdownName={"Language"} listArray={["Hindi", "English", "Urdu"] } add={true} />
        </Box>
    <Box>
    <Button
        id="basic-button"
        disableTouchRipple
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{height:'52px', width:'61px', fontSize:'50px',color:'#707070', bgcolor:'#fff', borderRadius:'8px'}}
    >
        ...
    </Button>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{ paper: 'custom-menu-paper' }}
        MenuListProps={{
        'aria-labelledby': 'basic-button',
        }}
        sx={{boxShadow:'none !important'}}
    >
        <MenuItem onClick={()=>{
            handleClose()
            handleThreeDotMenu("language")
            handleOpenPageNameUpdate("Add Language")
            }}>
                Add language</MenuItem>
        <MenuItem onClick={()=>{
            handleClose()
            handleThreeDotMenu("subject")
            handleOpenPageNameUpdate("Create Subject")
            }}>
                Create subject</MenuItem>
        <MenuItem onClick={()=>{
            handleClose()
            handleThreeDotMenu("topic")
            handleOpenPageNameUpdate("Create Subject")
            }}>
                Create topic</MenuItem>
        <MenuItem onClick={()=>{
            handleClose()
            handleThreeDotMenu("subtopic")
            handleOpenPageNameUpdate("Create Subject")
            }}>
                Create subtopic</MenuItem>
    </Menu>
    </Box>
    </Box>
</Box>
  )
}

export default LanguageAndDotMenu
