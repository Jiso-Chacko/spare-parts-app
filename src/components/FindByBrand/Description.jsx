import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Description.css";

const Description = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Box>
            <Typography className="descTitle">
              Popularity of Maruti in India
            </Typography>
            <Box sx={{ width: "42rem" }}>
              <Typography className="discription">
                Maruti is produced by Maruti Suzuki India Ltd, a subsidiary of
                Suzuki Motor Corporation of Japan. The manufacturer has been
                dealing with motor vehicles from 1983 when they kick-started
                production of Maruti 800.....
              </Typography>
            </Box>
          </Box>
          <Box sx={{ my: "3rem" }}>
            <Link
              sx={{ color: "#ED2C37" }}
              href="https://www.marutisuzuki.com/"
              underline="hover"
            >
              https://www.marutisuzuki.com/
            </Link>
          </Box>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Box>
            <Typography className="descTitle">
              Popularity of Maruti in India
            </Typography>
            <Box sx={{ width: "85%" }}>
              <Typography className="discription">
                Maruti is produced by Maruti Suzuki India Ltd, a subsidiary of
                Suzuki Motor Corporation of Japan. The manufacturer has been
                dealing with motor vehicles from 1983 when they kick-started
                production of Maruti 800.....
              </Typography>
            </Box>
          </Box>
          <Box sx={{ my: "3rem" }}>
            <Link
              sx={{ color: "#ED2C37" }}
              href="https://www.marutisuzuki.com/"
              underline="hover"
            >
              https://www.marutisuzuki.com/
            </Link>
          </Box>
        </>
      )}
    </>
  );
};

export default Description;
