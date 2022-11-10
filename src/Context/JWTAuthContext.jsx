import { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import apiClient from "../config/axios.config";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decodeToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decodeToken.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const login = async (email, password) => {
    try {
      const response = await apiClient.post("/admin/auth/login", {
        email,
        password,
      });

      if (response.data.success === true) {
        console.log("Inside if condition");
        let { accessToken, id } = response.data.data;

        accessToken = accessToken.split(" ")[1];

        initialState.user = id;
        initialState.isAuthenticated = true;
        setSession(accessToken);
        navigate("/");
      } else {
        console.log("Inside else condition");
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />;
      toast.error("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const logout = () => {
    setSession(null);
    initialState.isAuthenticated = false;
    navigate("user/login");
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response = await apiClient.get("/api/auth/profile");
          const { user } = response.data;

          initialState.user = user;
          initialState.isAuthenticated = true;
          console.log(initialState);
        }
      } catch (error) {
        console.log(error);
        initialState.isAuthenticated = false;
        initialState.user = null;
      }
    })();
  }, []);

  return (
      <AuthContext.Provider
        value={{
          ...initialState,
          method: "JWT",
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContext;
