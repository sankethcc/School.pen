import React from 'react'
import ProfileWrapper from '../QuizP1/MainContant/ProfileWrapper'
import Language from '../QuizP1/MainContant/Language'
import FillDetails from '../QuizP1/MainContant/FillDetails'
import Instructions from '../QuizP4/Instructions'

const MiddleColumn = () => {
  return (
    <div className='main-container'>
        <ProfileWrapper />
        <Language />
        <FillDetails />
        <Instructions />
      
    </div>
  )
}

export default MiddleColumn
