import React from 'react'
import DropDown from './DropDown'

const FillDetails = () => {
   
  return (
    <div className="fill-details">
      {/* pass all dropdown list using this.props */}
        <DropDown dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} classList={"classChange"}/>
        <DropDown dropdownName={"Subject"} listArray={["Science", "Mathematics", "History"]} />
        <DropDown dropdownName={"Topic"} listArray={["Biology", "Chemistry", "Physics"]} />
        <DropDown dropdownName={"Sub topic"} listArray={["Genetics", "Ecology", "Human anatomy"]} />
        <DropDown dropdownName={"Level"} listArray={["Beginner", "Intermediate" , "Advance"]} />
        <DropDown dropdownName={"Quiz Type"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} />
    </div>
  )
}

export default FillDetails
