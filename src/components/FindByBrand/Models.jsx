import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";
import { alpha, Box } from "@mui/system";
import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PartsAndAccess from "./PartsAndAccess";
import CategoryCards from "../Homepage/CategoryCards";
import { useMediaQuery } from "react-responsive";
import "./Models.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "417px",
    height: "48px",
    border: "1px solid #D9D9D9",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#918c8c",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "22ch",
      },
    },
  },
}));

const CardStyled = styled(Card)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "0px",
  "&:hover": {
    borderBottom: "4px solid #ED2C37",
  },
}));

const Models = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Box className="titleContainer">
            <Typography className="modelTitle">
              Choose Your <span style={{ color: "#ED2C37" }}> Model</span>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#B9B9B9" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search your model"
                inputProps={{ "aria-label": "Search your model" }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
              <Card className="card">
                <CardContent>
                  <img
                    src="/assets/images/ProductImages/image 27.png"
                    alt="icon"
                  />
                </CardContent>
              </Card>
              <Typography className="cardTitle">MARUTI 1000</Typography>
              <Typography className="cardSubTitle">
                01.1995 - 12.2004
              </Typography>

              <FormControl sx={{ minWidth: 200 }} variant="outlined">
                <InputLabel id="demo-simple-select-helper-label">
                  Select you car
                </InputLabel>
                <Select
                  sx={{
                    width: "275px",
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid #C9C9C9",
                      },
                    },
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#C9C9C9",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#ED2C37",
                            color: "white",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#C9C9C9",
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                  <MenuItem value={20}>1.0L (TYPE 2 MPFI)/1.0L/Petrol</MenuItem>
                  <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <PartsAndAccess />
              <CategoryCards />
            </Box>
          </Box>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Box sx={{ width: "100%" }}>
            <Box className="titleContainerMobile">
              <Typography className="modelTitleMobile">
                Choose Your <span style={{ color: "#ED2C37" }}> Model</span>
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "#B9B9B9" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search your model"
                    inputProps={{ "aria-label": "Search your model" }}
                  />
                </Search>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ my: 2 }}>
                <Card className="card">
                  <CardContent>
                    <img
                      src="/assets/images/ProductImages/image 27.png"
                      alt="icon"
                    />
                  </CardContent>
                </Card>
                <Typography className="cardTitle">MARUTI 1000</Typography>
                <Typography className="cardSubTitle">
                  01.1995 - 12.2004
                </Typography>

                <FormControl sx={{ minWidth: 200, mt: 2 }} variant="outlined">
                  <InputLabel id="demo-simple-select-helper-label">
                    Select you car
                  </InputLabel>
                  <Select
                    sx={{
                      width: "275px",
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid #C9C9C9",
                        },
                      },
                    }}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                      MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                          sx: {
                            "& .MuiMenuItem-root.Mui-selected": {
                              backgroundColor: "#C9C9C9",
                            },
                            "& .MuiMenuItem-root:hover": {
                              backgroundColor: "#ED2C37",
                              color: "white",
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                              backgroundColor: "#C9C9C9",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>1.0L (TYPE 1)/1.0L/Petrol</MenuItem>
                    <MenuItem value={20}>
                      1.0L (TYPE 2 MPFI)/1.0L/Petrol
                    </MenuItem>
                    <MenuItem value={30}>1.0L (TYPE 2)/1.0L/Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <PartsAndAccess />
                <CategoryCards />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Models;
