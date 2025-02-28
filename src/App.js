import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./context/GlobalState";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Account = lazy(() => import("./components/Account"));
const InvestmentDetails = lazy(() => import("./components/InvestmentDetails"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const InvestmentCalculator = lazy(() => import("./components/InvestmentCalculator"));

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Authenticating...</p>
      </div>
    );
  }

  return (
    <GlobalProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        {user && <Navbar />}
        <Suspense fallback={<div className="loading-container"><div className="spinner"></div><p>Loading...</p></div>}>
          <Routes>
            <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/account" element={user ? <Account /> : <Navigate to="/" />} />
            <Route path="/investment/:id" element={user ? <InvestmentDetails /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
            <Route path="/calculator" element={user ? <InvestmentCalculator /> : <Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </GlobalProvider>
  );
}

export default App;
