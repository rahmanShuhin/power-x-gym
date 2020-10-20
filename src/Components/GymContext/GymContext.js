import { createContext, useState } from "react";

import React from "react";
export const GymContext = createContext();
export const GymProvider = (props) => {
  const [member, setMember] = useState([]);
  return (
    <GymContext.Provider value={[member, setMember]}>
      {props.children}
    </GymContext.Provider>
  );
};
