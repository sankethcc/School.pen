import React from "react";
import { useState } from "react";
import Logo from '../assets/logo.png'
import Test from '../assets/Test.png'
import Exam from '../assets/Exam.png'
import User from '../assets/User.png'

const Menu = ({dBlock}) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className={`menu-container ${dBlock} `}>
      {/* page logo  */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      {/* menu list  */}
      <div className="menu-wrapper">
        <ul>
          <li className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
            <img src={Test} alt="" className="menuelog " />
            <p>Quiz</p>
          </li>
          <li className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
            <img src={Exam} className="menuelog" alt="" />
            <p>Exam</p>
          </li>
          <li className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')}>
            <img src={User} className="menuelog" alt="" />
            <p>Assign user</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
