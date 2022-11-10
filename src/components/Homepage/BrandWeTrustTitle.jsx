import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./BrandWeTrustTitle.css";

const BrandWeTrustTitle = () => {
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
              mt: 4,
            }}
          >
            <Typography className="brandWeTrustTitle">
              Brand We
              <span style={{ color: "#ED2C37", marginLeft: ".5rem" }}>
                Trust
              </span>
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
            <Typography className="brandWeTrustTitleMobile">
              Brand We
              <span style={{ color: "#ED2C37", marginLeft: ".5rem" }}>
                Trust
              </span>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BrandWeTrustTitle;
