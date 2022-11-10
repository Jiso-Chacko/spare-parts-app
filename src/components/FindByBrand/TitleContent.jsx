import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./TitleContent.css";

const TitleContent = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Box>
          <Typography className="findByBrandTitle">MARUTHI</Typography>
          <Box sx={{ width: "42rem" }}>
            <Typography className="titleDescription">
              If you are looking for Maruti spare parts, visit the boodmo app or
              website and access India’s largest online marketplace for car
              spare parts.! We house an unmatched range ofspares and accessories
              for the most popular vehicles in India.
            </Typography>
          </Box>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box>
          <Typography className="findByBrandTitleMobile">MARUTHI</Typography>
          <Box sx={{ width: "85%" }}>
            <Typography className="titleDescriptionMobile">
              If you are looking for Maruti spare parts, visit the boodmo app or
              website and access India’s largest online marketplace for car
              spare parts.! We house an unmatched range ofspares and accessories
              for the most popular vehicles in India.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TitleContent;
