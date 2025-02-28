import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (loading) return;
    setLoading(true);
    toast.dismiss();

    console.log("🔹 handleLogin triggered!"); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful, triggering toast...");
      setTimeout(() => {
        toast.success("✅ Login successful! Redirecting...");
        navigate("/dashboard");
      }, 500); 
    } catch (error) {
      console.error("❌ Login failed:", error);
      setTimeout(() => {
        toast.error("❌ Login failed: " + error.message);
      }, 500); 
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="auth-card">
        <h2>Welcome Back!</h2>
        <p>Log in to continue exploring investments.</p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Log In"}</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;
