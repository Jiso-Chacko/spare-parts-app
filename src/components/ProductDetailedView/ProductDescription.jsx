import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./ProductDescription.css";

const ProductDescription = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Container className="productionDiscription-container">
            <Box className="DetailsTitle">
              <Typography className="titleBrand">TATA</Typography>
              <Typography className="titleDispatch">
                Dispatch within one day.
              </Typography>
            </Box>
            <Typography className="productDetails-productTitle">
              Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
            </Typography>
            <Button className="ratingButton">
              <span style={{ color: "white" }}>4.5</span>
            </Button>
            <Box
              sx={{
                my: "2rem",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography className="productPrice">₹4,999.0</Typography>
              <Typography className="productMRP">MRP ₹5,999.00</Typography>
              <Typography className="productDiscount">25% OFF</Typography>
            </Box>
            <Typography className="productStock">12 in Stock</Typography>
            <Box
              sx={{
                my: "2rem",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography className="productDetailsTitle">
                  Part Number
                </Typography>
                <Typography className="productStockDetailsContent">
                  WYEG63564
                </Typography>
              </Box>
              <Box>
                <Typography className="productDetailsTitle">Origin</Typography>
                <Typography className="productStockDetailsContent">
                  Aftermarket
                </Typography>
              </Box>
              <Box>
                <Typography className="productDetailsTitle">Class</Typography>
                <Typography className="productStockDetailsContent">
                  Rim/Alloy Wheel
                </Typography>
              </Box>
            </Box>
            <Typography className="productDescriptionTitle">
              Description
            </Typography>
            <Typography className="productDescription">
              Rim / Alloy Wheels for CHEVROLET, HONDA, HYUNDAI, MAHINDRA,
              MARUTI, RENAULT, TATA - W1D05...00M00 - UNO MINDA
            </Typography>
            <Box>
              <ul className="productDetailsList">
                <li>
                  <span>100% Leak, Heat and X-Ray Tested Designs</span>
                </li>
                <li>
                  <span>
                    {" "}
                    IS-9436/38 safety standards followed during manufacturing.
                    Tested
                  </span>
                </li>
                <li>
                  <span>
                    {" "}
                    Excellent compatibility with radial, regular and tubeless
                    tires.{" "}
                  </span>
                </li>
                <li>
                  <span>
                    {" "}
                    Safe and Elegant Design with a stunning look. Lighter than
                    regular steel wheels,{" "}
                  </span>
                </li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    Improves Braking cooling and reduces brake fading,{" "}
                  </span>
                </li>
                <li>
                  <span> Improves fuel efficiency, </span>
                </li>
                <li>
                  <span>
                    {" "}
                    Best functionality and optimum fit, Durable, and Reliable.{" "}
                  </span>
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                my: "2rem",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button className="addToCart">Add to Cart</Button>
              <Button className="buyNow">Buy Now</Button>
            </Box>
          </Container>
        </>
      )}
      {isTabletOrMobile && (
        <Container>
          {/* <Box className="DetailsTitle">  
            <Typography className="titleBrand">TATA</Typography>
            <Typography className="titleDispatch">
              Dispatch within one day.
            </Typography>
          </Box> */}
          <Typography className="productTitleMobile">
            Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
          </Typography>
          <Button className="ratingButtonMobile">
            <span style={{ color: "white" }}>4.5</span>
          </Button>
          <Box
            sx={{
              mt: "2rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography className="productPriceMobile">₹4,999.0</Typography>
            <Typography className="productMRPMobile">MRP ₹5,999.00</Typography>
            <Typography className="productDiscountMobile">25% OFF</Typography>
          </Box>
          <Typography className="productStockMobile">12 in Stock</Typography>
          <Box
            sx={{
              my: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button className="addToCartMobile">Add to Cart</Button>
            <Button className="buyNowMobile">Buy Now</Button>
          </Box>

          <Box>
            <Typography className="productDescriptionTitleMobile">
              Description
            </Typography>
            <Typography className="productDescriptionMobile">
              Rim / Alloy Wheels for CHEVROLET, HONDA, HYUNDAI, MAHINDRA,
              MARUTI, RENAULT, TATA - W1D05...00M00 - UNO MINDA
            </Typography>
            <ul className="productDetailsListMobile">
              <li>
                <span>100% Leak, Heat and X-Ray Tested Designs</span>
              </li>
              <li>
                <span>
                  {" "}
                  IS-9436/38 safety standards followed during manufacturing.
                  Tested
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  Excellent compatibility with radial, regular and tubeless
                  tires.{" "}
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  Safe and Elegant Design with a stunning look. Lighter than
                  regular steel wheels,{" "}
                </span>
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  Improves Braking cooling and reduces brake fading,{" "}
                </span>
              </li>
              <li>
                <span> Improves fuel efficiency, </span>
              </li>
              <li>
                <span>
                  {" "}
                  Best functionality and optimum fit, Durable, and Reliable.{" "}
                </span>
              </li>
            </ul>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProductDescription;
