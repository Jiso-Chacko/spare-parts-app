import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useMediaQuery } from "react-responsive";
import "./TopSpare.css";
import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 2,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 3,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 4,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 5,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 6,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 7,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 8,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 9,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 10,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 11,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 12,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
  {
    id: 13,
    discount: "10%",
    title: 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
    price: 550,
    image: "/assets/images/ProductImages/image 2.png",
  },
];

const TopSpare = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Box>
            <Typography className="TopSpareTitle">
              Top Spare Parts for MARUTI at
              <span className="TopSpareSub">Low prices</span>
            </Typography>

            <Box
              sx={{
                display: "grid",
                flexWrap: "wrap",
                justifyContent: "space-between",
                grid: "auto / auto auto auto auto",
              }}
            >
              {product.map((item, key) => (
                <Card className="cardProListing">
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box className="proListingDiscountdiv">
                        <Typography className="proListingDiscount">
                          {item.discount}
                        </Typography>
                      </Box>
                      <FavoriteBorderIcon mr={2} />
                    </Box>
                    <Link to="/product/productDetailedView">
                      <img
                        src={item.image}
                        alt=""
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Link>
                    <Typography className="proListingTitle">
                      {item.title}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      <Typography className="proListingBrand">
                        Brand: MGP
                      </Typography>
                      <Typography className="proListingBrand">
                        Part No: 43511M79G10
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        my: 2,
                        alignItems: "center",
                      }}
                    >
                      <Typography className="proListingPrice">
                        ₹515.00
                      </Typography>
                      <Button className="proListingAdd">Add</Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography className="TopSpareTitleMobile">
                Top Spare Parts for <br /> MARUTI at
                <span style={{ color: "#ED2C37", marginLeft: ".5rem" }}>
                  Low prices
                </span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                grid: "1fr ",
                alignItems: "center",
              }}
            >
              {product.slice(0, 4).map((item, key) => (
                <Card className="cardProListing">
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box className="proListingDiscountdiv">
                        <Typography className="proListingDiscount">
                          {item.discount}
                        </Typography>
                      </Box>
                      <FavoriteBorderIcon mr={2} />
                    </Box>
                    <Link to="/product/productDetailedView">
                      <img
                        src={item.image}
                        alt=""
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Link>
                    <Typography className="proListingTitle">
                      {item.title}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      <Typography className="proListingBrand">
                        Brand: MGP
                      </Typography>
                      <Typography className="proListingBrand">
                        Part No: 43511M79G10
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        my: 2,
                        alignItems: "center",
                      }}
                    >
                      <Typography className="proListingPrice">
                        ₹515.00
                      </Typography>
                      <Button className="proListingAdd">Add</Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default TopSpare;
