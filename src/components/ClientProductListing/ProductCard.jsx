import { Button, Card, CardContent, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ReactComponent as Cart } from "../Utils/AppUtils/Cart2.svg";
import { useMediaQuery } from "react-responsive";
import "./ProductCard.css";

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
];

const ProductCard = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "center",
          }}
        >
          {product.map((item, key) => (
            <Card className="cardProListing">
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box className="proListingDiscountdiv">
                    <Typography className="proListingDiscount">
                      {item.discount}
                    </Typography>
                  </Box>
                  <FavoriteBorderIcon mr={2} />
                </Box>
                <img
                  src={item.image}
                  alt=""
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
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
                  <Typography className="proListingPrice">₹515.00</Typography>
                  <Button className="proListingAdd">Add</Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Container>
      )}
      {isTabletOrMobile && (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          {product.slice(0, 6).map((item, key) => (
            <Card className="cardProListing">
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box className="proListingDiscountdiv">
                    <Typography className="proListingDiscount">
                      {item.discount}
                    </Typography>
                  </Box>
                  <FavoriteBorderIcon mr={2} />
                </Box>
                <img
                  src={item.image}
                  alt=""
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
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
                  <Typography className="proListingPrice">₹515.00</Typography>
                  <Button className="proListingAdd">Add</Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductCard;
