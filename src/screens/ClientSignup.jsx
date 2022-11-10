import { Box, Container } from "@mui/system";
import React from "react";
import ImageBoxSignup from "../components/ClientSignUp/ImageBoxSignup";
import SignupBox from "../components/ClientSignUp/SignupBox";
import { useMediaQuery } from "react-responsive";

const ClientSignUp = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Container sx={{ my: 5 }}>
          <Box sx={{ display: "flex" }}>
            <ImageBoxSignup />
            <SignupBox />
          </Box>
        </Container>
      )}
      {isTabletOrMobile && (
        <Container sx={{ my: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <SignupBox />
          </Box>
        </Container>
      )}
    </>
  );
};

export default ClientSignUp;
