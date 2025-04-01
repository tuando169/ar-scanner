import { Routes, Route, Link, Navigate } from "react-router-dom";
import ARScan from "./pages/scan/ARScan.jsx";
import Upload from "./pages/upload/Upload.jsx";
import Login from "./pages/auth/login/Login.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state đăng nhập

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">AR Scanner</div>
        <div className="nav-links">
          <Link to="/">Scan</Link>
          <Link to="/upload">Upload</Link>
        </div>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/scan" element={<ARScan />} />
          <Route
            path="/upload"
            element={
              isLoggedIn ? (
                <Upload />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
          />
          <Route path="*" element={<Navigate to="/scan" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
