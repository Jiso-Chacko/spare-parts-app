import { Box, Container } from "@mui/system";
import React from "react";
import ImageBox from "../components/ClientLogin/ImageBox";
import LoginBox from "../components/ClientLogin/LoginBox";
import { useMediaQuery } from "react-responsive";

const ClientLogin = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Container sx={{ my: 5 }}>
          <Box sx={{ display: "flex" }}>
            <ImageBox />
            <LoginBox />
          </Box>
        </Container>
      )}
      {isTabletOrMobile && (
        <Container sx={{ my: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ImageBox />
            <LoginBox />
          </Box>
        </Container>
      )}
    </>
  );
};

export default ClientLogin;
