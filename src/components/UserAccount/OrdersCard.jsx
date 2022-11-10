import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "./OrderCard.css";

const OrdersCard = () => {
  return (
    <>
      <Card className="orderCard">
        <CardContent>
          <Box className="titleContainer">
            <Box>
              <Typography className="cardTitle">Order Placed</Typography>
              <Typography className="cardSubTitle">11 July 2022</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">Total</Typography>
              <Typography className="cardSubTitle">₹515.00</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">Ship to</Typography>
              <Typography className="cardSubTitle">Arun Pradeep</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">
                Order# 403-88748-736464
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography className="cardSubTitle">
                  View order details
                </Typography>
                <div className="seperator"></div>
                <Typography className="cardSubTitle">Invoice</Typography>
              </Box>
            </Box>
          </Box>
          <Typography className="deliveryTitle">Delivered Yesterday</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box className="imgContainer">
              <img
                src="/assets/images/ProductImages/orderImg.png"
                alt="product"
              />
            </Box>
            <Box sx={{ marginLeft: "1rem", width: "38rem" }}>
              <Typography className="productTitle">
                Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
              </Typography>
              <Typography className="proSubTitle">Brand: MGP Part</Typography>
              <Typography className="proSubTitle">No: 43511M79G10</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="proPrice">₹515.00</Typography>
                <Button className="returnButton">Return / Exchange</Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card className="orderCard">
        <CardContent>
          <Box className="titleContainer">
            <Box>
              <Typography className="cardTitle">Order Placed</Typography>
              <Typography className="cardSubTitle">11 July 2022</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">Total</Typography>
              <Typography className="cardSubTitle">₹515.00</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">Ship to</Typography>
              <Typography className="cardSubTitle">Arun Pradeep</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">
                Order# 403-88748-736464
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography className="cardSubTitle">
                  View order details
                </Typography>
                <div className="seperator"></div>
                <Typography className="cardSubTitle">Invoice</Typography>
              </Box>
            </Box>
          </Box>
          <Typography className="deliveryTitle">
            Delivered 27-May-2022
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box className="imgContainer">
              <img
                src="/assets/images/ProductImages/orderImg.png"
                alt="product"
              />
            </Box>
            <Box sx={{ marginLeft: "1rem", width: "38rem" }}>
              <Typography className="productTitle">
                Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
              </Typography>
              <Typography className="proSubTitle">Brand: MGP Part</Typography>
              <Typography className="proSubTitle">No: 43511M79G10</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="proPrice">₹515.00</Typography>
                <Button className="returnButton">Return / Exchange</Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card className="orderCard">
        <CardContent>
          <Box className="titleContainer">
            <Box>
              <Typography className="cardTitle">Order Placed</Typography>
              <Typography className="cardSubTitle">11 July 2022</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">Total</Typography>
              <Typography className="cardSubTitle">₹515.00</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">Ship to</Typography>
              <Typography className="cardSubTitle">Arun Pradeep</Typography>
            </Box>
            <Box>
              <Typography className="cardTitle">
                Order# 403-88748-736464
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography className="cardSubTitle">
                  View order details
                </Typography>
                <div className="seperator"></div>
                <Typography className="cardSubTitle">Invoice</Typography>
              </Box>
            </Box>
          </Box>
          <Typography className="deliveryTitle">
            Delivered 29-May-2022
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box className="imgContainer">
              <img
                src="/assets/images/ProductImages/orderImg.png"
                alt="product"
              />
            </Box>
            <Box sx={{ marginLeft: "1rem", width: "38rem" }}>
              <Typography className="productTitle">
                Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
              </Typography>
              <Typography className="proSubTitle">Brand: MGP Part</Typography>
              <Typography className="proSubTitle">No: 43511M79G10</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="proPrice">₹515.00</Typography>
                <Button className="returnButton">Return / Exchange</Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default OrdersCard;
