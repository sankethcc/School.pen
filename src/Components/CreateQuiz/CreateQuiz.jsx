import { Avatar, Box, FormControl, FormGroup, InputLabel, Menu, MenuItem, Select, Typography, Button } from '@mui/material'
import userImg from './userImg.png'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import React from 'react'
import UnstyledSelectObjectValues from './UnstyledSelectObjectValues';
import Questions from './Questions'
import Layout from '../Layout';
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


const CreateQuiz = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <Layout>
    <Box style={style.dflex} sx={{width:'85%', background:'#F5F6F7'}} >
        <Box sx={{width:'74%', px:"40px", pt:'38px'}}>
            <Box style={style.dflex} sx={{justifyContent:'space-between', width:'100%'}}>
                <Typography sx={{font:'500 35px Lato'}}>Create Quiz</Typography>
                <Box style={style.dflex} sx={{gap:'35px'}}>
                    <Box style={style.bellIcon} sx={{borderRadius:'34px', border:'3px solid #4F78FE', height:'60px', width:'60px' }}>
                        <CircleNotificationsIcon sx={{fontSize:'32px', color:'#4F78FE'}} />
                    </Box>
                    <Avatar 
                        src={userImg}
                        sx={{ height:'60px', width:'60px',borderRadius:'300px' }}
                    />
                    
                </Box>
            </Box>
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                </Box>
                </Box>
            </Box>
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
                <UnstyledSelectObjectValues dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} classList={"classChange"} add={true} />
                <UnstyledSelectObjectValues dropdownName={"Subject"} listArray={["Science", "Mathematics", "History"]} add={true}/>
                <UnstyledSelectObjectValues dropdownName={"Topic"} listArray={["Biology", "Chemistry", "Physics"] } add={true}/>
                <UnstyledSelectObjectValues dropdownName={"Sub topic"} listArray={["Genetics", "Ecology", "Human anatomy"]}add={true} />
                <UnstyledSelectObjectValues dropdownName={"Level"} listArray={["Beginner", "Intermediate" , "Advance"]} add={false}/>
                <UnstyledSelectObjectValues dropdownName={"Quiz Type"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} add={false}/>

            </Box>

            {/*  question and options componennt */}

                <Questions />

        </Box>


        <Box sx={{width:'26%', background:'#fff'}}>
            

        </Box>
    </Box>
    </Layout>
  )
}

export default CreateQuiz
