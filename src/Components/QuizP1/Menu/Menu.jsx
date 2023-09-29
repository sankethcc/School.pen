import React from "react";
import { useState } from "react";
import Logo from '../assets/logo.png'
import Test from '../assets/Test.png'
import Exam from '../assets/Exam.png'
import User from '../assets/User.png'
import { Box, List } from "@mui/material";

const Menu = ({dBlock}) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <Box 
    className={`menu-container ${dBlock} `}
    sx={{
      background:'#fff',
      p:'18px 32px',
      height:'100vh',
      width:'15%'
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
          }} 
          >
            <img src={Test} alt="" className="menuelog " />
            <p>Quiz</p>
          </li>
          <li className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} 
            onClick={() => {
              handleTabClick('tab2')
            }}>
            <img src={Exam} className="menuelog" alt="" />
            <p>Exam</p>
          </li>

          <li className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} 
          onClick={() => {
            handleTabClick('tab3')
            }}>
            <img src={User} className="menuelog" alt="" />
            <p>Assign user</p>
          </li>
        </List>
      </Box>
    </Box>
  );
};

export default Menu;
