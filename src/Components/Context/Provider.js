import React, { createContext, useContext, useState } from "react";
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

  const [prevnote, setprevnote] = useState([{
    pquestion: "",
    poptions:[],
  }])
  return (
    <ChatContext.Provider
      value={{
              activeTab,
              setActiveTab,
              quest,
              setquest,
              prevnote,
              setprevnote
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
