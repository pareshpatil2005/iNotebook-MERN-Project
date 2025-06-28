import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import AlertContext from "../context/alert/AlertContext";

const AddNote = () => {
    const { showAlert } = useContext(AlertContext);
    const { addNote } = useContext(noteContext);
    const [note, setNote] = useState({ title: '', description: '', tag: '' });

    const handleChange = (e) => {
        setNote({ ...note, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.title.length < 3) {
            showAlert("Title must be at least 3 characters long.", "danger");
            return;
        }
        if (note.description.length < 5) {
            showAlert("Description must be at least 5 characters long.", "danger");
            return;
        }
        if (note.tag.length < 2) {
            showAlert("Tag must be at least 2 characters long.", "danger");
            return;
        }
        addNote(note.title, note.description, note.tag);
        showAlert("Note added successfully!", "success");
        setNote({ title: '', description: '', tag: '' }); // Clear form
    };

    return (
        <div className="card shadow-lg custom-card">
            <div className="card-body">
                <h2 className="card-title mb-4 text-center custom-title">Add a Note</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            id="title"
                            value={note.title}
                            onChange={handleChange}
                            placeholder="Enter note title"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control custom-input"
                            id="description"
                            value={note.description}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Enter note description"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            id="tag"
                            value={note.tag}
                            onChange={handleChange}
                            placeholder="e.g. Personal, Work"
                        />
                    </div>
                    <button type="submit" className="btn btn-gradient px-5 py-2 d-block mx-auto" style={{fontSize: '1.08rem', borderRadius: '1.5rem'}}>
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddNote;