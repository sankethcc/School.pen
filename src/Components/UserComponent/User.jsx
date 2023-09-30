import React from "react";


import { useState } from "react";
import Menu from "../QuizP1/Menu/Menu";
import Assign from "./AssignUser/Assign";
import TotalUser from "./AssignUser/TotalUser";
import { Box } from "@mui/material";


const User = () => {
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
        <Box>
          
        </Box>
        <Assign />
        <TotalUser />
    </div>
  );
};

export default User;
