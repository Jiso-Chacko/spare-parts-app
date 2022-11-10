import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./ProductCatBanner.css";
import { ReactComponent as ArrowIcon } from "../Utils/AppUtils/Arrow1.svg";

const ProductCatBanner = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="ProductCatBannerMain">
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography className="proCatBannerTitle">
                Popular <br />{" "}
                <span style={{ color: "#ED2C37" }}> category </span>
              </Typography>
              <Typography className="proCatBannerSubTitle">
                Now you can browse from 150,000 <br /> products in an easy way.
                Choose <br /> your category and find what you <br /> are looking
                for.
              </Typography>
            </Box>
            <Box className="proCatBannerImgBg1">
              <Typography className="imgTitle">Summer & Winder Tire</Typography>
              <Button className="arrowButton">
                <ArrowIcon />
              </Button>
            </Box>
            <Box className="proCatBannerImgBg2">
              <Typography className="imgTitle">
                Gadgets & accessories
              </Typography>
              <Button className="arrowButton">
                <ArrowIcon />
              </Button>
            </Box>
            {/* <img src="/assets/images/ProductImages/Rectangle33.png" alt="" />
        <img src="/assets/images/ProductImages/Rectangle34.png" alt="" /> */}
          </Container>
        </Box>
      )}

      {isTabletOrMobile && (
        <Box className="ProductCatBannerMainMobile">
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography className="proCatBannerTitleMobile">
                Popular
                <span style={{ color: "#ED2C37" }}> category </span>
              </Typography>
              <Typography className="proCatBannerSubTitleMobile">
                Now you can browse from{" "}
                <span style={{ color: "#ED2C37" }}> 150,000</span> <br />{" "}
                <span style={{ color: "#ED2C37" }}>products </span> in an easy
                way. Choose your <br /> category and find what you are looking
                for.
              </Typography>
            </Box>
            <Box className="proCatBannerImgBg1Mobile">
              <Typography className="imgTitle">Summer & Winder Tire</Typography>
              <Button className="arrowButton">
                <ArrowIcon />
              </Button>
            </Box>
            <Box className="proCatBannerImgBg2Mobile">
              <Typography className="imgTitle">
                Gadgets & accessories
              </Typography>
              <Button className="arrowButton">
                <ArrowIcon />
              </Button>
            </Box>
            {/* <img src="/assets/images/ProductImages/Rectangle33.png" alt="" />
          <img src="/assets/images/ProductImages/Rectangle34.png" alt="" /> */}
          </Container>
        </Box>
      )}
    </>
  );
};

export default ProductCatBanner;
