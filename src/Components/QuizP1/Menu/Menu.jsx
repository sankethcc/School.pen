import React from "react";
import { useState } from "react";
import Logo from '../assets/logo.png'
import Test from '../assets/Test.png'
import Exam from '../assets/Exam.png'
import User from '../assets/User.png'
import Test707070 from './Test (3).png'
import TestWhite from './Test (2).png'
import { Box, List, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {State} from "../../Context/Provider"
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
const Menu = ({ dBlock, handleOpenPage, handleOpenPageNameUpdate, openPage }) => {
  const navigate = useNavigate();
  // const [activeTab, setActiveTab] = useState('tab1');
  const { activeTab, setActiveTab } = State();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab == 'tab1') {
      //  navigate("/main");
    }
    else if(tab == 'tab2') {
      //  navigate("/exam");
    }
    else {
      // navigate("/user");
    }
  };
  
  return (
    <Box 
    // className={`menu-container ${dBlock} `}
    sx={{
      background:'#fff',
      p:'18px 32px',
      height:'100dvh',
      position:'sticky',
      top:'0',
      width:{
        md:'21%',
        lg:'15%',
      }
    }}
    
    >
      {/* page logo  */}
      <Box sx={{textAlign:'center', pb:'30px' }}>
        <img style={{ width:'134px'}} src={Logo} alt="" />
      </Box>
      {/* menu list  */}
      <Box
       className="menu-wrapper"
      >
        <List >
          <li className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} 

            onClick={() => {
            
            handleTabClick('tab1')
            handleOpenPage('Create Quiz')
            handleOpenPageNameUpdate("Create Quiz")
          }} 
          >
            <img src={activeTab==="tab1"?TestWhite:Test707070} alt="" className="menuelog " />
            

            <p>Quiz</p>
          </li>
          <li className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} 
            onClick={() => {
              handleTabClick('tab2')
              handleOpenPage('Create Exam')
              handleOpenPageNameUpdate("Create Exam")
            }}>
            {/* <img src={Exam} className="menuelog" alt="" /> */}
            <DescriptionIcon sx={{fontSize:'30px'}} htmlColor={`${activeTab ==='tab2'?"#fff":"#707070"}`} />
            
            <p>Exam</p>
          </li>

          <li className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} 
          onClick={() => {
            handleTabClick('tab3')
            handleOpenPage('Assign User')
            handleOpenPageNameUpdate("Assign User")
            }}>
            {/* <img src={User} className="menuelog" alt="" /> */}
            <PersonIcon sx={{fontSize:'30px'}} htmlColor={`${activeTab ==='tab3'?"#fff":"#707070"}`} />
            <p>Assign user</p>
          </li>
          {(openPage==="Assign User"&&"Create User"&&"User Profile")?
          <Box sx={{textAlign:'left', ml:'56px', }}>
              <Typography sx={{font:'700 14px Poppins', color:'#707070', pt:'24px', cursor:'pointer'}}>Create User</Typography>
              <Typography sx={{font:'700 14px Poppins', color:'#707070', pt:'24px', cursor:'pointer'}}>Assign User</Typography>
          </Box>
          :null}
          {/* comment */}
          {/* comment */}
        </List>
      </Box>
    </Box>
  );
};

export default Menu;
