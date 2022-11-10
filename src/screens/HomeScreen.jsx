import React from "react";
import { Box, styled } from "@mui/system";
import { Outlet } from "react-router-dom";
import ClientNavbar from "../components/Utils/ClientNavbar";
import ClientFooter from "../components/Utils/ClientFooter";
import useSettings from "../hooks/useSettings";
import "./HomeScreen.css";
import BannerContent from "../components/Homepage/BannerContent";
import DropdownGroup from "../components/Homepage/DropdownGroup";
import ProductCarousel from "../components/Homepage/ProductCaurosel";
import ProductCatBanner from "../components/Homepage/ProductCatBanner";
import FindCat from "../components/Homepage/FindCat";
import CategoryCards from "../components/Homepage/CategoryCards";
import ShopByMakers from "../components/Homepage/ShopByMakers";
import BrandWeTrust from "../components/Homepage/BrandWeTrust";
import UserReview from "../components/Homepage/UserReview";
import { useMediaQuery } from "react-responsive";

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

const HomeScreen = () => {
  const { settings, updateSettings } = useSettings();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Box className="homepageMainContainer">
        {isDesktopOrLaptop && (
          <Box className="bg-image">
            <ClientNavbar />
            <BannerContent />
            <DropdownGroup />
          </Box>
        )}

        {isTabletOrMobile && (
          <Box className="bg-imageMobile">
            <ClientNavbar />
            <BannerContent />
            <DropdownGroup />
          </Box>
        )}

        {isDesktopOrLaptop && (
          <Box sx={{ my: 10 }}>
            <ProductCarousel />
          </Box>
        )}

        {isTabletOrMobile && (
          <Box
            sx={{
              mt: 35,
            }}
          >
            <ProductCarousel />
          </Box>
        )}

        <ProductCatBanner />
        <FindCat />
        <CategoryCards />
        <ShopByMakers />
        <BrandWeTrust />
        <UserReview />
        <MyComponent>
          <ClientFooter />
        </MyComponent>
      </Box>
    </>
  );
};

export default HomeScreen;
