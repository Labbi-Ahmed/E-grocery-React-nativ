import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('EN');

  return (
    <AppContext.Provider value={{
      currency, setCurrency,
      language, setLanguage
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
