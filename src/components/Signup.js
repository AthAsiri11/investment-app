import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (loading) return;
    setLoading(true);
    toast.dismiss();

    console.log("🔹 handleSignup triggered!");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ Signup successful, triggering toast...");
      toast.success("✅ Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("❌ Signup failed:", error);
      toast.error("❌ Signup failed: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="auth-card">
        <h2>Welcome to Investment App</h2>
        <p>Create an account to explore investment opportunities.</p>
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;
