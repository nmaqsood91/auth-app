import { createContext, useReducer, useContext } from "react";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  error: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", "dummyToken");
      return { ...state, isAuthenticated: true, error: "" };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        error: "Invalid username or password",
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, isAuthenticated: false, error: "" };
    default:
      return state;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
