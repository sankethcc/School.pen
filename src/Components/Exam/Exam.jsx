import React from "react";


import { useState } from "react";
import Menu from "../QuizP1/Menu/Menu";
import SideDetails from "../QuizP1/Preview/SideDetails";
import MiddleColumn from "./MiddleColumn";


const Exam = () => {
  // hamburger functionality for responsive page
  const [toggle, setToggle] = useState(true)
  const [close, setClose] = useState("")
  const [dBlock, setDBlock] = useState("")
  const toggleMenu = ()=>{
    if(toggle){
      setToggle(!toggle)
      setClose("close-hamburger")
      setDBlock("d-block")
    }else{
      setToggle(!toggle)
      setClose("")
      setDBlock("")
    }
  }
  const props = {
    toggle,
    close,
    toggleMenu, 
    dBlock
  }

  return (
    <div className="main-wrapper">
      <Menu {...props} />
      <MiddleColumn />
      <SideDetails />
    </div>
  );
};

export default Exam;
