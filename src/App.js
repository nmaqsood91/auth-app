import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { AuthProvider } from "./store/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
