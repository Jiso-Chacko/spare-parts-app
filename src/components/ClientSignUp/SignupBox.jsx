import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./SignupBox.css";

const SignupBox = () => {
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
        <Box className="signupContainer">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className="signupWelcome">
              {" "}
              Create your account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                <label for="name" className="loginLabel">
                  Name
                </label>
                <input
                  type="text"
                  id="text"
                  name="name"
                  className="signupInput"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      message: "Please enter you name",
                    },
                  })}
                />
                <p style={{ color: "#ED2C37" }}>{errors.name?.message}</p>
                <label for="email" className="loginLabel">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="signupInput"
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

                <Box
                  sx={{
                    display: "flex",
                    my: 2,
                  }}
                >
                  <Box>
                    <select id="city" name="city" className="signupSelectbox">
                      <option value="city" className="signupLabel">
                        city
                      </option>
                      <option value="city1" className="signupLabel">
                        city1
                      </option>
                      <option value="city2" className="signupLabel">
                        city2
                      </option>
                      <option value="city3" className="signupLabel">
                        city3
                      </option>
                      <option value="city4" className="signupLabel">
                        city4
                      </option>
                    </select>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                    <Box>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        placeholder="Mobile Number"
                        className="signupSelectbox"
                        {...register("number", {
                          required: "Mobile number is required",
                          pattern: {
                            value:
                              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                            message: "Please enter a valid mobile number",
                          },
                        })}
                      />
                    </Box>
                    <p style={{ color: "#ED2C37" }}>{errors.number?.message}</p>
                  </Box>
                </Box>
                <label for="password" className="signupLabel">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="signupInput"
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
                <Box sx={{ my: 2 }}>
                  <label for="rememberMe" className="rememberLabel">
                    By clicking “Create Account” you agree to our{" "}
                    <span style={{ color: "#ED2C37" }}>
                      {" "}
                      Terms & Conditions
                    </span>{" "}
                    and <span style={{ color: "#ED2C37" }}>Privacy Policy</span>
                  </label>
                </Box>
              </Box>
              <Button className="loginButton" type="submit">
                Create Account
              </Button>
              <Typography className="account">
                Already have an account?
                <Button className="loginSignup" href="/user/login">
                  {" "}
                  Login{" "}
                </Button>
              </Typography>
            </form>
          </Container>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box className="signupContainerMobile">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className="signupWelcomeMobile">
              {" "}
              Create your account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                <label for="name" className="loginLabelMobile">
                  Name
                </label>
                <input
                  type="text"
                  id="text"
                  name="name"
                  className="signupInputMobile"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      message: "Please enter you name",
                    },
                  })}
                />
                <p style={{ color: "#ED2C37" }}>{errors.name?.message}</p>
                <label for="email" className="loginLabelMobile">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="signupInputMobile"
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

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    my: 2,
                  }}
                >
                  <Box>
                    <select
                      id="city"
                      name="city"
                      className="signupSelectboxMobile"
                    >
                      <option value="city" className="signupLabelMobile">
                        city
                      </option>
                      <option value="city1" className="signupLabelMobile">
                        city1
                      </option>
                      <option value="city2" className="signupLabelMobile">
                        city2
                      </option>
                      <option value="city3" className="signupLabelMobile">
                        city3
                      </option>
                      <option value="city4" className="signupLabelMobile">
                        city4
                      </option>
                    </select>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                    <Box>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        placeholder="Mobile Number"
                        className="signupSelectboxMobile"
                        {...register("number", {
                          required: "Mobile number is required",
                          pattern: {
                            value:
                              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                            message: "Please enter a valid mobile number",
                          },
                        })}
                      />
                    </Box>
                    <p style={{ color: "#ED2C37" }}>{errors.number?.message}</p>
                  </Box>
                </Box>
                <label for="password" className="signupLabelMobile">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="signupInputMobile"
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
                  <label for="rememberMe" className="rememberLabel">
                    By clicking “Create Account” you agree to our{" "}
                    <span style={{ color: "#ED2C37" }}>
                      {" "}
                      Terms & Conditions
                    </span>{" "}
                    and <span style={{ color: "#ED2C37" }}>Privacy Policy</span>
                  </label>
                </Box>
              </Box>
              <Button className="loginButtonMobile" type="submit">
                Create Account
              </Button>
              <Typography className="accountMobile">
                Already have an account?
                <Button className="loginSignupMobile" href="/user/login">
                  {" "}
                  Login{" "}
                </Button>
              </Typography>
            </form>
          </Container>
        </Box>
      )}
    </>
  );
};

export default SignupBox;
