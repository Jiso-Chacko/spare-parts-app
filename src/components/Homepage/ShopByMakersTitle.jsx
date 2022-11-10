import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./ShopByMakersTitle.css";

const ShopByMakersTitle = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Box>
          <Box className="shopByMakersContainer">
            <Typography className="shopByMakersTitle">
              <span style={{ color: "white" }}>Shop by</span>{" "}
              <span style={{ color: "#ED2C37" }}>Makers</span>
            </Typography>
          </Box>
        </Box>
      )}

      {isTabletOrMobile && (
        <Box>
          <Box className="shopByMakersContainerMobile">
            <Typography className="shopByMakersTitleMobile">
              <span style={{ color: "white" }}>Shop by</span>{" "}
              <span style={{ color: "#ED2C37" }}>Makers</span>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ShopByMakersTitle;
