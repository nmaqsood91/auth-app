import { useState } from "react";
import { useAuth } from "../store/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { state, dispatch } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    if (
      credentials.username === "testuser" &&
      credentials.password === "testpassword"
    ) {
      dispatch({ type: "LOGIN_SUCCESS" });
    } else {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  if (state.isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>
      {state.error && <p className="text-danger">{state.error}</p>}
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
