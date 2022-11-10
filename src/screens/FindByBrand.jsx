import { Box, Container } from "@mui/system";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TitleContent from "../components/FindByBrand/TitleContent";
import Description from "../components/FindByBrand/Description";
import Models from "../components/FindByBrand/Models";
import TopSpare from "../components/FindByBrand/TopSpare";
import { useMediaQuery } from "react-responsive";
import "./FindByBrand.css";

const FindByBrand = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Brand
    </Link>,
    <Typography key="3" className="currentPageTitle">
      Maruti Suzuki
    </Typography>,
  ];

  return (
    <>
      {isDesktopOrLaptop && (
        <Container sx={{ mt: 4 }}>
          <Stack spacing={2}>
            <Breadcrumbs
              separator="››"
              aria-label="breadcrumb"
              className="findByBrandBreadcrumbs"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Box className="brandBreadcrumbUnderline"></Box>
          <TitleContent />
          <Description />
          <Models />
          <Box sx={{ mt: 12, mb: 8 }}>
            <TopSpare />
          </Box>
        </Container>
      )}
      {isTabletOrMobile && (
        <Container sx={{ mt: 4 }}>
          <Stack spacing={2}>
            <Breadcrumbs
              separator="››"
              aria-label="breadcrumb"
              className="findByBrandBreadcrumbs"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Box className="brandBreadcrumbUnderlineMobile"></Box>
          <TitleContent />
          <Description />
          <Models />
          <Box sx={{ mt: 12, mb: 8 }}>
            <TopSpare />
          </Box>
        </Container>
      )}
    </>
  );
};

export default FindByBrand;
