import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./FindCat.css";

const FindCat = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="findByCatContainer">
          <Typography className="findByCatTitle">
            Find by <span style={{ color: "#ED2C37" }}>Category</span>
          </Typography>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box className="findByCatContainerMobile">
          <Typography className="findByCatTitleMobile">
            Find by <span style={{ color: "#ED2C37" }}>Category</span>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default FindCat;
