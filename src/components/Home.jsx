import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";

const Home = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  if (!state.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-5">
      <h2>Hi Marcus</h2>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default Home;
