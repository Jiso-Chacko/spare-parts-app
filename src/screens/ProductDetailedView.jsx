import React from "react";
import ProductImgCarousel from "../components/ProductDetailedView/ProductImgCarousel";
import ProductDescription from "../components/ProductDetailedView/ProductDescription";
import Compatability from "../components/ProductDetailedView/Compatability";
import FeaturesAndSpec from "../components/ProductDetailedView/FeaturesAndSpec";
import RelatedParts from "../components/ProductDetailedView/RelatedParts";
import { useMediaQuery } from "react-responsive";
import { Box, Container } from "@mui/system";

import FreqAskedQuestions from "../components/ProductDetailedView/FreqAskedQuestions";

const ProductDetailedView = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Box sx={{ display: "flex" }}>
            <ProductImgCarousel />
            <ProductDescription />
          </Box>
          <Compatability />
          <FeaturesAndSpec/>
          <RelatedParts/>
          <Container>
            <FreqAskedQuestions />
          </Container>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Box>
            <ProductImgCarousel />
            <ProductDescription />
          </Box>
          <Compatability />
          <FeaturesAndSpec/>
          <RelatedParts/>
          <Container>
            <FreqAskedQuestions />
          </Container>
        </>
      )}
    </>
  );
};

export default ProductDetailedView;
