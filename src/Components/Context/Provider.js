import React, { createContext, useContext, useState } from "react";
const ChatContext = createContext();

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <ChatContext.Provider
      value={{
              activeTab,
              setActiveTab
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
