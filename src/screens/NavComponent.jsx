import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ClientNavRouting from "../components/Utils/ClientNavRouting";
import ClientFooter from "../components/Utils/ClientFooter";
import styled from "@emotion/styled";

const MyComponent = styled("div")({
  // display: 'flex',
  // alignItems:'center',
  // justifyContent:'center'
  position: "relative",
  left: 0,
  bottom: 0,
  right: 0,
  height: "19rem",
  // textAlign:'center'
});

const NavComponent = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <ClientNavRouting />
        <Outlet />
        <MyComponent>
          <ClientFooter />
        </MyComponent>
      </Box>
    </>
  );
};

export default NavComponent;
