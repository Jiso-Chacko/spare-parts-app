import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./PartsAndAccess.css";

const FindCat = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Box>
            <Box sx={{ my: 5, mt: 7 }}>
              <Typography className="partsAndAccessTitle">
                MARUTI Parts and{" "}
                <span className="titleAccess">Accessories</span>
              </Typography>
            </Box>
          </Box>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Box>
            <Box sx={{ my: 5, mt: 7 }}>
              <Typography className="partsAndAccessTitleMobile">
                Find by{" "}
                <span style={{ color: "#ED2C37", marginLeft: ".5rem" }}>
                  {" "}
                  Category{" "}
                </span>
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default FindCat;
