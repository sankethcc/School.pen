import { Box, Button, ButtonGroup, Container, FormControl, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import BckgroundImage from "../Data/LoginBackground.png"
import SchoolPenLogo from "../Data/SchoolPenLogo.png"
import Layout from './Layout'

const Login = () => {
  const backgroundImageUrl = BckgroundImage;
  const containerStyle = {
    background: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "#7A58E6",
    height: '100vh',
  };
  const paraStyle = {
    color: `var(--Dark-grey, #707070)`,
    fontSize:`20px`,
    paddingTop: '19px',
    fontWeight: '400'
  };


  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Layout>
      <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        component="div" 
        style={containerStyle}>
        <Box 
          backgroundColor="#fff"
          borderRadius="32px"
          padding="30px 90px 56px 91px"
          justifyContent="space-around"
          >
          <Box textAlign="center">
          <img src={SchoolPenLogo} width= "236px" height="115px" alt='SchoolPen' />

          </Box>
          <Box varient="div" className='headings'>
            <Typography variant="h3">Hello Again</Typography>
            <Typography varient="p" style={paraStyle}>Welcome back you’ve been missed</Typography>
          </Box>
          <div className='btn-wrapper'>
          <Button
        sx={{
          width: '50%',
          height: '78px',
          borderRadius: '16px',     
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          color: activeTab === 'tab1' ? '#FFF' : '#707070',
          fontWeight: activeTab === 'tab1' ? '700' : '400',
          background: activeTab === 'tab1' ? '#7A58E6' : 'transparent',
          '&:hover': {
            background: activeTab === 'tab1' ? '#7A58E6' : 'transparent',
          },
        }}
        className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab1')}
      >
        User
      </Button>
      <Button
        sx={{
          width: '50%',
          height: '78px',
          borderRadius: '16px',
          fontSize: '20px',
          lineHeight: 'normal',
          border: 'none',
          cursor: 'pointer',
          color: activeTab === 'tab2' ? '#FFF' : '#707070',
          fontWeight: activeTab === 'tab2' ? '700' : '400',
          background: activeTab === 'tab2' ? '#7A58E6' : 'transparent',
          '&:hover': {
            background: activeTab === 'tab2' ? '#7A58E6' : 'transparent',
          },
        }}
        className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab2')}
      >
        Admin
      </Button>
          </div>
            <form onSubmit={(e)=>e.preventDefault()} className='login-form'>
              <div>
              <input type="text" placeholder='Enter User Name' />
              <input type="password" placeholder='Enter password' />
              <p>Forgot password</p>
              </div>
              <button type='submit'>Login</button>
            </form>
        </Box>
      </Box>

    </Layout>

  )
}

export default Login
