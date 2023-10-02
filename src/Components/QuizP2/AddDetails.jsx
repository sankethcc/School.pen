import React, { useState } from 'react'
import DropDown from '../QuizP1/MainContant/DropDown'
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";

const AddDetails = ({handleThreeDotMenu}) => {
  const [listarray, setlistarray] = useState(["Science", "Mathematics", "History"])
  const [sub, setsub] = useState({
    name: "",
    topic: "",
    subt1: "",
    subt2: ""
  });
  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setsub((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submithandler = () => {
    const formData = new FormData();
    formData.append('subject', sub.name);
    formData.append('topic', sub.topic);
    formData.append('subtopic', [sub.subt1,sub.subt2]);

    axios
    .post("http://localhost:5000/add_Subject_quizz", formData)
        .then((response) => {
          if (response.status === 200) {
            console.log("Data added successfully");
          } else {
            alert("Error occured");
          }
        })
        .catch((err) => {
          console.log(err);
        });

  }
  const [addSubject, setAddSubject] = useState(false);

  const toggleAddSubject = () => {
    setAddSubject(prevAddSubject => !prevAddSubject);
  };
  return (
    <div className="side-details page2">
      <h3>Create subject/topic/subtopic</h3>
      {/* <DropDown dropdownName={"Add new or select existing"} listArray={["Science", "Mathematics", "History"]} add={true} adddetailsId={"page2Extra"} /> */}

        {/* style={{display:'none'}} */}
      <div className="dropdown dropdown-defult" style={{marginBottom:'10px'}}>
            <Link className="btn btn-secondary dropdown-toggle inner-select"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Add new or select existing
            </Link>
            {/* all dropdown items display using map function */}
            <ul className="dropdown-menu" >
                {listarray.map((itemVal, index) => (
                    <li key={index}>
                    <Link className="dropdown-item" onClick={toggleAddSubject}>{itemVal}</Link>
                    </li>
                ))}
              <li><NavLink onClick={toggleAddSubject} className="dropdown-item add-item">Add New</NavLink></li>
              
            </ul>
      </div>
      {addSubject === true?
      <div className='addSub'>
        <div className='subtopic'>
          <text className="textc">Subject</text>
          <input name="name"
                type="text"
                value={sub.name}
                onChange={InputEvent}
                placeholder='New sub name ABC'>
          </input>
        </div>
        <div className='subtopic'>
          <text className="textc">Topic1</text>
          <input name="topic"
                type="text"
                value={sub.topic}
                onChange={InputEvent}
                placeholder='Psychology'></input>
        </div>
        <div className='subtopic'>
          <text className="textc">SubTopic 1.1</text>
          <div className='subtopicl'>
            <input name="subt1"
                type="text"
                value={sub.subt1}
                onChange={InputEvent}
                placeholder='Psychology basics'></input>
            <text>Add new subtopic</text>
          </div>
        </div>
        <div className='subtopic'>
          <text className="textc">SubTopic 1.2</text>
          <div className='subtopicl'>
            <input name="subt2"
                type="text"
                value={sub.subt2}
                onChange={InputEvent}
                placeholder='Psychology disorders'></input>
            <text>Add new subtopic</text>
          </div>
        </div>
        <div>
          <button onClick={()=>{
            submithandler()
            toggleAddSubject()
            handleThreeDotMenu()
            }}   style={{float: "right"}}>
              <text className='btnt'>Add new topic</text>
            
            </button>
        </div>
      </div>
      :null}
    </div>
  )
}

export default AddDetails
