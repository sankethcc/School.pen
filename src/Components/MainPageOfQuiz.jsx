import React, { useState } from 'react'
import Menu from './QuizP1/Menu/Menu'
import CreateQuiz from './CreateQuiz/CreateQuiz'
import { Box } from '@mui/system'

const MainPageOfQuiz = () => {
    const [toggle, setToggle] = useState(true)
    const [close, setClose] = useState("")
    const [dBlock, setDBlock] = useState("")
    const [openPage, setOpenPage] = useState("Create Quiz")
    const [openPageName, setOpenPageName] = useState("Create Quiz")

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

    const handleOpenPage = (page)=>{
        setOpenPage(page)
    }
    const handleOpenPageNameUpdate = (pageName)=>{
        setOpenPageName(pageName)
        console.log(pageName)
    }

  


    const propsForMenu = {toggle, close, toggleMenu, dBlock, handleOpenPage, handleOpenPageNameUpdate  }
    const propsForCreateQuiz = {openPageName, handleOpenPageNameUpdate, openPage, handleOpenPage }

  return (
    <Box sx={{display:'flex'}}>
        <Menu {...propsForMenu} />
        <CreateQuiz {...propsForCreateQuiz} />
    </Box>
  )
}

export default MainPageOfQuiz
