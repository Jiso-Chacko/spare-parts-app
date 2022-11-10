import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./UserReviewTitle.css";

const UserReviewTitle = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className="userReviewTitle">
              <span style={{ color: "black" }}>Our Clients</span>{" "}
              <span style={{ color: "#ED2C37" }}>Love Us!</span>
            </Typography>
          </Box>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography className="userReviewTitleMobile">
              <span style={{ color: "black" }}>Our Clients</span>{" "}
              <span style={{ color: "#ED2C37" }}>Love Us!</span>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserReviewTitle;
