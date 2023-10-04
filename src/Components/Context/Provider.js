import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'


const ChatContext = createContext();

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [quest, setquest] = useState({
    Subject: "",
    Class: "",
    Topic: "",
    Sub_topic: "",
    Level: "",
    Quiz_Type: "",
    Language: "English",
    
  });

  // const [prevnote, setprevnote] = useState([])

  const [questions, setQuestions] = useState([])
  const [subjects, setSubjects] = useState([])
  useEffect(()=>{
    const fetchQuestions = async ()=>{
      try{
        const { data } = await axios.get("http://localhost:5000/get_all_quizz")
        const question = JSON.parse(data)
        // console.log(question)
        question?.map((data, i) => {
          const { question, options } = data.question_container
          setQuestions(oldArray => [{question: question, options: options},...oldArray])
        })
        // console.log(question)

      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchQuestions()
    const fetchSubject = async ()=>{
      try{
        const { data } = await axios.get("http://localhost:5000/get_all_subject_quizz")
        const subjects = JSON.parse(data)
        setSubjects(subjects)
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchSubject()
  },[])


  return (
    <ChatContext.Provider
      value={{
              activeTab,
              setActiveTab,
              quest,
              setquest,
              questions,
              subjects,
              setQuestions
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const State = () => {
  return useContext(ChatContext);
};

export default Provider;
