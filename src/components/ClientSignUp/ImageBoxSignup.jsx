import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./ImgageBoxSignup.css";

const ImageBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="imageBoxSignupContainer">
          <Box sx={{ mx: 5, position: "absolute", bottom: 0, mb: 5 }}>
            <Typography className="imgageBoxSignupTitle">
              Let’s get you set up
            </Typography>
            <Typography className="imgageBoxSignupSubTitle">
              With our advanced search functionality you can easily find any
              spare part for your car
            </Typography>
          </Box>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box className="imageBoxSignupContainerMobile">
          <Box sx={{ mx: 5, position: "absolute", bottom: 0, mb: 2 }}>
            <Typography className="imgageBoxSignupTitleMobile">
              Enter the best car spare parts marketplace in India
            </Typography>
            <Typography className="imgageBoxSignupSubTitleMobile">
              With our advanced search functionality you can easily find any
              spare part for your car
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ImageBox;
