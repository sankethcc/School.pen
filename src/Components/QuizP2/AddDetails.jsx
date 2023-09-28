import React from 'react'
import DropDown from '../QuizP1/MainContant/DropDown'

const AddDetails = () => {
  return (
    <div className="side-details page2">
      <h3>Create subject/topic/subtopic</h3>
      <DropDown dropdownName={"Add new or select existing"} listArray={["Option1", "Option2", "Option3", "Option4"]} adddetailsId={"page2Extra"} />
    </div>
  )
}

export default AddDetails
