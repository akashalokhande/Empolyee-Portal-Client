import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = ({ children }) => {
  const [modal, setmodal] = useState(false);
  let [search, setsearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const createmodal = () => {
    setmodal(!modal);
  };
  

  const searchfilter = (e) => {
    let { value } = e.target;
    setsearch(value);
  };

  return (
    <NoteContext.Provider
      value={{
        createmodal,
        modal,
        search,
        searchfilter,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
