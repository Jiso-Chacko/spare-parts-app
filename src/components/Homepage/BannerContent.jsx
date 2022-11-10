import React from "react";
import { Button, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import "./BannerContent.css";

const BannerContent = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Typography component="div" className="BannerContentDiv">
          <Typography className="bannerContentTitle">
            Get the Right
            <span className="bannerContentSubTitle">
              <br /> Special
            </span>
            <br />
            at the right
            <span className="bannerContentSubTitle"> Price </span>
          </Typography>
          <Button className="browseProButton">Browse Product</Button>
        </Typography>
      )}
      {isTabletOrMobile && (
        <Typography component="div" className="BannerContentDivMobile">
          <Typography className="bannerContentTitleMobile">
            Get the Right
            <span className="bannerContentSubTitleMobile">
              <br /> Special
            </span>
            <br />
            at the Right <br />
            <span className="bannerContentSubTitleMobile"> Price </span>
          </Typography>
          <Button className="browseProButtonMobile">Browse Product</Button>
        </Typography>
      )}
    </>
  );
};

export default BannerContent;
