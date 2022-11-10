import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./ImageBox.css";

const ImageBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="imageBoxContainer">
          <Box sx={{ mx: 5, position: "absolute", bottom: 0, mb: 5 }}>
            <Typography className="imgageBoxTitle">
              Enter the best car spare parts marketplace in India
            </Typography>
            <Typography className="imgageBoxSubTitle">
              With our advanced search functionality you can easily find any
              spare part for your car
            </Typography>
          </Box>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box className="imageBoxContainerMobile">
          <Box sx={{ mx: 5, position: "absolute", bottom: 0, mb: 2 }}>
            <Typography className="imgageBoxTitleMobile">
              Enter the best car spare parts marketplace in India
            </Typography>
            <Typography className="imgageBoxSubTitleMobile">
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
