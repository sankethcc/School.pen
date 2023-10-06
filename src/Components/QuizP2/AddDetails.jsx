import React, { useState } from 'react'
import DropDown from '../QuizP1/MainContant/DropDown'
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";
import UnstyledSelectObjectValues from '../CreateQuiz/UnstyledSelectObjectValues';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconButton } from '@mui/material';
import { State } from '../Context/Provider';
import AddNewSubject from './AddNewSubject';

const AddDetails = ({handleThreeDotMenu}) => {
  
  // const [listarray, setlistarray] = useState(["Science", "Mathematics", "History"])
  const { subjects } = State();
  // console.log(subjects.subject)
  const [existingSubject, setExistingSubject] = useState(false)

  // const [sub, setSub] = useState({
  //   name: "",
  //   topic: "",
  //   subt1: "",
  //   subt2: ""
  // });

  const [sub, setSub] = useState([
    {name: '', image: null},
    {topic: '', image: null},
    {subt1: '', image: null},
    {subt2: '', image: null},
  ])
  
  // const InputEvent = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setSub((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: value,
  //     };
  //   });
  // };


  const InputEvent = (event, index) => {
    const { value, name } = event.target;
    setSub((prevData) => {
      const updatedSub = [...prevData]; 
      updatedSub[index] = { ...updatedSub[index], [name]: value };
      return updatedSub;
    });
  };
  const handleImageUpload = (event, index, type) => {
    const newSub = [...sub];
    if (type === 'sub') {
      newSub[0].image = event.target.files[0]
    } else if(type === 'topic') {
      newSub[1].image = event.target.files[0]
    } else if(type === 'subt1') {
      newSub[2].image = event.target.files[0]
    } else if(type === 'subt2') {
      newSub[3].image = event.target.files[0]
    }
    setSub(newSub)
  };
  

  const submithandler = () => {
    const formData = new FormData();
    console.log(sub);
    formData.append('subject', sub[0].name);
    formData.append('subject_image', sub[0].image);
    formData.append('topic', sub[1].topic);
    formData.append('topic_image', sub[1].image); 
    formData.append('subtopic', sub[2].subt1);
    formData.append('subtopic_image', sub[2].image);

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
    console.log(sub)

  }
  const [addSubject, setAddSubject] = useState(false);

  const toggleAddSubject = () => {
    setAddSubject(prevAddSubject => !prevAddSubject);
  };
  const handleExistingSubject = ()=>{
    setExistingSubject(!existingSubject)

  }

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
                {subjects.map((data, index) => {
                  const {subject} = data
                  return (
                    <li key={index}>
                    <Link className="dropdown-item" 
                      onClick={()=>{
                        toggleAddSubject()
                        handleExistingSubject()
                        
                        }}>
                      {subject}
                    </Link>
                    </li>
                )
                  })}
              <li><NavLink onClick={toggleAddSubject} className="dropdown-item add-item">Add New</NavLink></li>
              
            </ul>
      </div>
      {/* <UnstyledSelectObjectValues dropdownName={"Add New or select existing"} listArray={["Science", "Mathematics", "History"]} add={true} value={"Subject"}/> */}
      {addSubject === true?
      <div className='addSub'>
        <div className='subtopic'>
          <text className="textc">Subject</text>
          <div className='input-wrapper'>
          <input name="name"
                type="text"
                // {(existingSubject =="false")?value={'sanket'} :null}}
                // value={`${ existingSubject =="false" ?sub.name:null}`}
                value={sub.name}
                onChange={(e)=>InputEvent(e,0)}
                placeholder='New sub name ABC'>
          </input>
          <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, null, 'sub')}
                style={{ display: 'none' }}
                id="sub-image-upload"
                />
                <label htmlFor="sub-image-upload">
                <IconButton component="span" aria-label="Upload image">
                    <AddPhotoAlternateIcon />
                </IconButton>
                </label>

          </div>
        </div>
        <div className='subtopic'>
          <text className="textc">Topic1</text>
          <div className='input-wrapper'>
          <input name="topic"
                type="text"
                value={sub.topic}
                onChange={(e)=>InputEvent(e,1)}
                placeholder='Psychology'></input>
          <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, null, 'topic')}
                style={{ display: 'none' }}
                id="topic-image-upload"
                />
                <label htmlFor="topic-image-upload">
                <IconButton component="span" aria-label="Upload image">
                    <AddPhotoAlternateIcon />
                </IconButton>
                </label>

          </div>
        </div>
        <div className='subtopic'>
          <div className='subtopic-heading'> 
            <text className="textc">SubTopic 1.1</text>
            <text className='add-new'>Add new subtopic</text>
          </div>
          <div className='subtopicl'>
            <input name="subt1"
                type="text"
                value={sub.subt1}
                onChange={(e)=>InputEvent(e,2)}
                placeholder='Psychology basics' 
            />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, null, 'subt1')}
                style={{ display: 'none' }}
                id="subt1-image-upload"
                />
                <label htmlFor="subt1-image-upload">
                <IconButton component="span" aria-label="Upload image">
                    <AddPhotoAlternateIcon />
                </IconButton>
                </label>
          </div>
        </div>
        <div className='subtopic'>
          <div className='subtopic-heading'> 
            <text className="textc">SubTopic 1.1</text>
            <text className='add-new'>Add new subtopic</text>
          </div>
          <div className='subtopicl'>
            <input name="subt2"
                type="text"
                value={sub.subt2}
                onChange={(e)=>InputEvent(e,3)}
                placeholder='Psychology disorders'
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, null, 'subt2')}
                style={{ display: 'none' }}
                id="subt2-image-upload"
                />
                <label htmlFor="subt2-image-upload">
                <IconButton component="span" aria-label="Upload image">
                    <AddPhotoAlternateIcon />
                </IconButton>
                </label>

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
      {/* <AddNewSubject /> */}
    </div>
  )
}

export default AddDetails
