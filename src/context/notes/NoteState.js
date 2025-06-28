import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {

  const host = "http://localhost:5000";
 
  const [notes, setNotes] = useState([]);

  // Fetch or get all notes
  const getNotes = async () => {
    // API Call to fetch notes from the server can be added here
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      }
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };


  // Add a new note
  const addNote = async (title, description, tag) => {
    // API Call to add the note to the server can be added here
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    // console.log(json);
    setNotes(prevNotes => [...prevNotes, json]);
  };


  // Delete a note
    const deleteNote = async (id) => {
        // API Call to delete the note from the server can be added here

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            }
        });
        await response.json();
        // console.log(json);

        // delete the note from the state (for client-side rendering)
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    };


 // Edit a note
  const editNote = async (id, title, description, tag) => {

    // API Call to update the note on the server can be added here
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    await response.json();
    // console.log(json);


    // Update the note in the state (for client-side rendering)
    // Only update state if the backend update was successful
    if (response.ok) {
    // Option (recommended): Re-fetch all notes from the backend for perfect sync
    await getNotes();
  } else {
    // Optionally handle error
    console.error('Failed to update note');
  }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;