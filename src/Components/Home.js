import AddNote from './AddNote';
import Notes from './Notes';

const Home = () => {
  return (
    <div className="custom-bg min-vh-100 py-5">
      <div className="container">
        <div className="d-flex flex-column align-items-center mb-5">
          <h1 className="inotebook-heading mb-2">
            <span className="gradient-text">iNotebook</span>
          </h1>
          <p className="lead text-light text-center" style={{ maxWidth: 600 }}>
            Your personal cloud notebook.<br />
            <span style={{ color: "#bdbdbd" }}>
              Create, edit, and manage your notes securely from anywhere!
            </span>
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <AddNote />
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;