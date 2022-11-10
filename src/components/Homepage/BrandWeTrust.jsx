import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./BrandWeTrust.css";
import BrandWeTrustTitle from "./BrandWeTrustTitle";
import BrandWeTrustCarousel from "./BrandWeTrustCarousel";
const BrandWeTrust = () => {
  return (
    <Box className="BrandWeTrustMain">
      <div
        style={{ marginTop: "3rem", paddingTop: "1rem", marginBottom: "3rem" }}
      >
        <BrandWeTrustTitle />
      </div>
      <Box container>
        <BrandWeTrustCarousel />
      </Box>
    </Box>
  );
};

export default BrandWeTrust;
