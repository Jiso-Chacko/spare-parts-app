import React from "react";
import ClientNavRouting from "../components/Utils/ClientNavRouting";
import ClientFooter from "../components/Utils/ClientFooter";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/system";
import "../components/Utils/ClientNavRouting.css";
import FilterBox from "../components/ClientProductListing/FilterBox";
import CategoryBox from "../components/ClientProductListing/CategoryBox";
import ProductCard from "../components/ClientProductListing/ProductCard";
import { useMediaQuery } from "react-responsive";

// Footer
import { AppBar, Button, ThemeProvider, Toolbar } from "@mui/material";

const MyComponent = styled("div")({
  // display: 'flex',
  // alignItems:'center',
  // justifyContent:'center'
  position: "relative",
  left: 0,
  bottom: 0,
  right: 0,
  height: "19rem",
  // textAlign:'center'
});

const ProductListing = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Box flexGrow={1} position="relative">
      <Container sx={{ my: "3rem" }}>
        {isDesktopOrLaptop && (
          <Box sx={{ display: "flex" }}>
            <FilterBox />
            <ProductCard />
          </Box>
        )}
        {isTabletOrMobile && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FilterBox />
            <ProductCard />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProductListing;
