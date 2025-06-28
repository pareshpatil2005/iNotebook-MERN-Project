import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="about-section d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
        padding: "40px 0",
      }}
    >
      <div
        className="card shadow-lg border-0 mb-4"
        style={{
          maxWidth: "700px",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "1.5rem",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <i
              className="fas fa-book-open fa-3x"
              style={{
                color: "#fff",
                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                borderRadius: "50%",
                padding: "18px",
              }}
            ></i>
          </div>
          <h2
            className="card-title text-center mb-3"
            style={{ fontWeight: 700, letterSpacing: "1px" }}
          >
            About iNotebook
          </h2>
          <p
            className="card-text text-center"
            style={{ fontSize: "1.15rem", color: "#e0e0e0" }}
          >
            <b>iNotebook</b> is a modern, full-stack note-taking app designed
            for productivity and security. Create, edit, and organize your notes
            anywhere, anytime, with a seamless and beautiful interface.
          </p>
          <div className="row text-center mt-4">
            <div className="col-6 col-md-3 mb-3">
              <i
                className="fas fa-bolt fa-2x mb-2"
                style={{ color: "#ffd600" }}
              ></i>
              <div>Fast & Intuitive</div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i
                className="fas fa-lock fa-2x mb-2"
                style={{ color: "#00e676" }}
              ></i>
              <div>Secure Storage</div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i
                className="fas fa-sync-alt fa-2x mb-2"
                style={{ color: "#00b0ff" }}
              ></i>
              <div>Real-time Sync</div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i
                className="fas fa-mobile-alt fa-2x mb-2"
                style={{ color: "#ff4081" }}
              ></i>
              <div>Mobile Friendly</div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Timeline */}
      <div
        className="card shadow border-0 mb-4"
        style={{
          maxWidth: "700px",
          background: "rgba(255,255,255,0.10)",
          borderRadius: "1.2rem",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="card-body p-4">
          <h4
            className="card-title text-center mb-4"
            style={{ fontWeight: 600 }}
          >
            How it Works
          </h4>
          <div className="timeline d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-center mb-3 mb-md-0">
              <i
                className="fas fa-user-plus fa-2x mb-2"
                style={{ color: "#ffd600" }}
              ></i>
              <div>Sign Up / Login</div>
            </div>
            <div
              className="d-none d-md-block"
              style={{
                width: "60px",
                height: "2px",
                background: "#6a11cb",
                margin: "0 10px",
              }}
            ></div>
            <div className="text-center mb-3 mb-md-0">
              <i
                className="fas fa-plus-circle fa-2x mb-2"
                style={{ color: "#00e676" }}
              ></i>
              <div>Add Notes</div>
            </div>
            <div
              className="d-none d-md-block"
              style={{
                width: "60px",
                height: "2px",
                background: "#6a11cb",
                margin: "0 10px",
              }}
            ></div>
            <div className="text-center mb-3 mb-md-0">
              <i
                className="fas fa-edit fa-2x mb-2"
                style={{ color: "#00b0ff" }}
              ></i>
              <div>Edit & Organize</div>
            </div>
            <div
              className="d-none d-md-block"
              style={{
                width: "60px",
                height: "2px",
                background: "#6a11cb",
                margin: "0 10px",
              }}
            ></div>
            <div className="text-center">
              <i
                className="fas fa-cloud-upload-alt fa-2x mb-2"
                style={{ color: "#ff4081" }}
              ></i>
              <div>Access Anywhere</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose iNotebook */}
      <div
        className="card shadow border-0 mb-4"
        style={{
          maxWidth: "700px",
          background: "rgba(255,255,255,0.10)",
          borderRadius: "1.2rem",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="card-body p-4">
          <h4
            className="card-title text-center mb-3"
            style={{ fontWeight: 600 }}
          >
            Why Choose iNotebook?
          </h4>
          <ul
            className="list-unstyled text-center"
            style={{ color: "#e0e0e0", fontSize: "1.08rem" }}
          >
            <li>
              <i
                className="fas fa-check-circle me-2 text-success"
              ></i> 100%
              privacy—your notes are yours only
            </li>
            <li>
              <i className="fas fa-check-circle me-2 text-success"></i> Lightning-fast performance and real-time updates
            </li>
            <li>
              <i className="fas fa-check-circle me-2 text-success"></i> Clean, distraction-free interface
            </li>
            <li>
              <i className="fas fa-check-circle me-2 text-success"></i> Open-source and extensible
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-3">
        <Link
          to="/"
          className="btn btn-lg btn-gradient-primary"
          style={{
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "2rem",
            padding: "12px 36px",
            fontWeight: 600,
            boxShadow: "0 4px 24px rgba(106,17,203,0.15)",
          }}
        >
          Start Using iNotebook
        </Link>
      </div>
    </div>
  );
};

export default About;
