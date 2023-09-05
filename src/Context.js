import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  const [someState, setSomeState] = useState("My Context API tutorial");

  const contextValue = [
    someState,
    setSomeState,
  ];

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}




