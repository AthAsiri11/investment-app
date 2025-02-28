import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error("Error logging out. Try again.");
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="navbar">
      <ToastContainer />
      <h2 className="navbar-title">Investment App</h2>
      <div className="nav-links">
        <Link to="/dashboard" className="nav-btn">Dashboard</Link>
        <Link to="/account" className="nav-btn">Account</Link>
        <button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
