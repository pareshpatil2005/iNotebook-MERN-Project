import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    "name": "Sarvadnya",
    "class": "BCA"
  }

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        "name": "Paresh",
        "class": "E&TC"
      })
    }, 1000);
  }

  return (
    <NoteContext.Provider value={{state, setState, update}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
// NoteState is a context provider component that wraps its children with a NoteContext.Provider.
// It allows any component within its tree to access the context value, which is currently an empty object.
// This is useful for managing global state related to notes, such as fetching, adding, or deleting notes.
// The value prop can be updated later to include functions and state related to notes, making it a powerful tool for state management.