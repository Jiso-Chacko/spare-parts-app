import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "./LoginBox.css";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="loginContainer">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className="LoginWelcome">Welcome to EMP!</Typography>
            <Typography className="LoginSubWelcome">
              Please enter your details
            </Typography>
            <Button className="loginWithGoogle">
              <img src="/assets/images/Login/google.svg" alt="google" />
              <Typography className="loginWithGoogltTitle">
                Login with Google
              </Typography>
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                <label for="email" className="loginLabel">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="loginInput"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <p style={{ color: "#ED2C37" }}>{errors.email?.message}</p>
                <label for="password" className="loginLabel">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="loginInput"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must have at least 5 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p style={{ color: "#ED2C37" }}>{errors.password.message}</p>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  mt: 1,
                }}
              >
                <Box>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="true"
                    className="rememberInput"
                  ></input>
                  <label for="rememberMe" className="rememberLabel">
                    Remember for 30 days
                  </label>
                </Box>
                <Button className="forgotPassButton">Forgot Password</Button>
              </Box>
              <Button className="loginButton" type="submit">
                Log in
              </Button>
              <Typography className="account">
                Don’t have an account?
                <Button className="loginSignup" href="/user/signup">
                  {" "}
                  Sign up{" "}
                </Button>
              </Typography>
            </form>
            <ToastContainer />
          </Container>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box className="loginContainerMobile">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className="LoginWelcomeMobile">
              Welcome to EMP!
            </Typography>
            <Typography className="LoginSubWelcomeMobile">
              Please enter your details
            </Typography>
            <Button className="loginWithGoogleMobile">
              <img src="/assets/images/Login/google.svg" alt="google" />
              <Typography className="loginWithGoogltTitleMobile">
                Login with Google
              </Typography>
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                  width: "100%",
                }}
              >
                <label for="email" className="loginLabelMobile">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="loginInputMobile"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <p style={{ color: "#ED2C37" }}>{errors.email?.message}</p>
                <label for="password" className="loginLabelMobile">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="loginInputMobile"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 3,
                      message: "Password must have at least 3 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p style={{ color: "#ED2C37" }}>{errors.password.message}</p>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  mt: 1,
                }}
              >
                <Box>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="true"
                    className="rememberInputMobile"
                  ></input>
                  <label for="rememberMe" className="rememberLabelMobile">
                    Remember for 30 days
                  </label>
                </Box>
                <Button className="forgotPassButtonMobile">
                  Forgot Password
                </Button>
              </Box>
              <Button className="loginButtonMobile" type="submit">
                Log in
              </Button>
              <Typography className="accountMobile">
                Don’t have an account?
                <Button className="loginSignupMobile" href="/user/signup">
                  {" "}
                  Sign up{" "}
                </Button>
              </Typography>
            </form>
            <ToastContainer />
          </Container>
        </Box>
      )}
    </>
  );
};

export default LoginBox;
