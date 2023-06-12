import React, { createContext, useState } from "react";

const ToasterContext = createContext();

export default ToasterContext;

export const ToasterProvider = ({ children }) => {
  
  const [data, setData] = useState({
    toaster: {
      showToaster: false,
      toasterMessage: '',
    }
  });
  
  // Mengupdate data konteks dan juga menyimpannya ke penyimpanan
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <ToasterContext.Provider value={{ data, updateData }}>
      {children}
    </ToasterContext.Provider>
  );
};
