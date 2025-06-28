import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import AlertContext from '../context/alert/AlertContext';

const NoteItem = (props) => {
  const { editNote, deleteNote } = useContext(noteContext);
  const { showAlert } = useContext(AlertContext);
  const { _id, title, description, tag } = props.note;

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({ title, description, tag });

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editNote(_id, editData.title, editData.description, editData.tag);
    setShowModal(false);
    showAlert("Note updated successfully!", "success");
  };

  const handleDelete = () => {
    deleteNote(_id);
    showAlert("Note deleted successfully!", "danger");
  };

  return (
    <>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="badge bg-secondary">{tag}</span>
            <div>
              <i
                className="fa-solid fa-pen-to-square text-primary mx-2"
                style={{ cursor: 'pointer' }}
                title="Edit"
                onClick={() => { setEditData({ title, description, tag }); setShowModal(true); }}
              ></i>
              <i
                className="fa-solid fa-trash-can text-danger mx-2"
                style={{ cursor: 'pointer' }}
                title="Delete"
                onClick={handleDelete}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={handleEditSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Edit Note</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    value={editData.title}
                    onChange={handleEditChange}
                    required
                  />
                  <textarea
                    name="description"
                    className="form-control mb-2"
                    value={editData.description}
                    onChange={handleEditChange}
                    required
                  />
                  <input
                    type="text"
                    name="tag"
                    className="form-control mb-2"
                    value={editData.tag}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">Save</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteItem;