import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [showSignupPrompt, setShowSignupPrompt] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setShowSignupPrompt(false);
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("token", data.authToken);
                setMessage("Login successful! Redirecting...");
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                setMessage(data.error || "Login failed. Check your credentials.");
                if (data.error && data.error.toLowerCase().includes("login with correct credentials")) {
                    setShowSignupPrompt(true);
                }
            }
        } catch (err) {
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "90vh", background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" }}>
            <div className="card shadow-lg border-0 p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "1.5rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(6px)" }}>
                <div className="text-center mb-4">
                    <i className="fas fa-user-lock fa-3x" style={{ color: "#fff", background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", borderRadius: "50%", padding: "18px" }}></i>
                </div>
                <h2 className="text-center mb-4" style={{ color: "#fff", fontWeight: 700, letterSpacing: "1px" }}>Login to iNotebook</h2>
                {message && (
                    <div className="alert alert-info text-center py-2" style={{ borderRadius: "1rem" }}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control custom-input"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-white">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control custom-input"
                            id="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn w-50 py-2 mt-2 login-btn"
                            style={{
                                fontSize: "1.08rem",
                                borderRadius: "1.5rem",
                                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                                color: "#fff",
                                fontWeight: 700,
                                border: "none",
                                boxShadow: "0 2px 12px rgba(106,17,203,0.13)",
                                letterSpacing: "1px",
                                transition: "box-shadow 0.2s, transform 0.2s, background 0.2s, color 0.2s",
                            }}
                        >
                            Login
                        </button>
                    </div>
                </form>
                {showSignupPrompt && (
                    <div className="text-center mt-4">
                        <div className="alert alert-warning text-center py-2" style={{ borderRadius: '1rem', fontSize: '1.05rem' }}>
                            Don&apos;t have an account?&nbsp;
                            <Link to="/signup" className="fw-bold text-decoration-none" style={{ color: '#2575fc' }}>
                                Sign up Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <style>{`
                .login-btn:hover {
                    box-shadow: 0 6px 24px rgba(106,17,203,0.25);
                    transform: translateY(-2px) scale(1.03);
                    background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
                    color: #fff;
                }
            `}</style>
        </div>
    );
};

export default Login;