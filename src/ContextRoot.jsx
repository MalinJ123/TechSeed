import React, {createContext, useState} from 'react';
export const AppContext = createContext();


export const ContextRoot = ({ children }) => { 
  const [showTextContainer, setShowTextContainer] = useState(true)

  const handleNavigation = () => {
    setShowTextContainer(false); 
  }
  return (
    <AppContext.Provider value={{ showTextContainer, handleNavigation }}>
      {children}
    </AppContext.Provider>
  );
};