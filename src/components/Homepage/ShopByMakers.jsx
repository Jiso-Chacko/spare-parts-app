import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ShopByMakers.css";
import ShopByMakersTitle from "./ShopByMakersTitle";
import MakersCards from "./MakersCards";

const ShopByMakers = () => {
  return (
    <Box className="shopByMakersMain">
      <div style={{ marginTop: "3rem", paddingTop: "1rem" }}>
        <ShopByMakersTitle />
      </div>
      <Box>
        <MakersCards />
      </Box>
    </Box>
  );
};

export default ShopByMakers;
