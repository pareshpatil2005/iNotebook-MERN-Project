import noteContext from "../context/notes/noteContext";
import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {

    if (localStorage.getItem("token") === null) {
      window.location.href = "/login";
      // Optionally, you can show an alert or message here
      alert("You need to log in first.");
    } else {
      getNotes();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2 className="mt-5 mb-3 text-center text-white">Your Notes</h2>
      {notes.length === 0 ? (
        <div
          className="text-center text-light my-5 d-flex flex-column align-items-center justify-content-center"
          style={{ fontSize: "1.2rem", opacity: 0.95 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
              marginBottom: "14px",
              boxShadow: "0 2px 12px rgba(106,17,203,0.13)",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <rect x="7" y="3" width="10" height="4" rx="2" fill="white" />
              <rect x="4" y="7" width="16" height="14" rx="3" fill="white" />
              <circle cx="12" cy="10.5" r="1" fill="#6a11cb" />
              <rect x="10" y="14" width="4" height="1.5" rx="0.75" fill="#6a11cb" />
              <rect x="10" y="17" width="4" height="1.5" rx="0.75" fill="#6a11cb" />
            </svg>
          </div>
          <div className="mt-2">
            <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
              No notes to display
            </span>
            <br />
            <span style={{ fontSize: "1rem", color: "#bdbdbd" }}>
              Start by adding your first note!
            </span>
          </div>
        </div>
      ) : (
        notes.map((note) => <NoteItem key={note._id} note={note} />)
      )}
    </>
  );
};

export default Notes;
