import React from "react";
import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import useSettings from "../../hooks/useSettings";
import { Box } from "@mui/material";
import { ReactComponent as Logo } from "../Utils/AppUtils/Group.svg";
import { ReactComponent as Facebook } from "../Utils/AppUtils/facebook.svg";
import { ReactComponent as Twitter } from "../Utils/AppUtils/twitter.svg";
import { ReactComponent as Instagram } from "../Utils/AppUtils/instagram.svg";
import { ReactComponent as Linkedin } from "../Utils/AppUtils/linkedin.svg";
import { useMediaQuery } from "react-responsive";

import clsx from "clsx";
import "./ClientFooter.css";

const topBarHeight = 80;

const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : "",
}));

const Paragraph = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

const Span = ({ children, className, ellipsis, textTransform, ...props }) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#000000",
  minHeight: "19rem !important", // minHeight: topBarHeight,
  "@media ( 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" },
    },
  },
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 1rem",
  maxWidth: "1170px",
  margin: "0 auto",
}));

const ClientFooter = () => {
  const theme = useTheme();
  const { settings } = useSettings();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <>
      {isDesktopOrLaptop && (
        <ThemeProvider theme={footerTheme}>
          <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
            <AppFooter>
              <FooterContent>
                {/* <a href="#">
            <Button variant="contained" color="secondary">
              Get MatX Pro
            </Button>
          </a> */}

                <Box>
                  <Logo className="appLogo" />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    mx: 5,
                  }}
                >
                  <Typography className="contactUs">Contact Us</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography className="contactUsContent1">
                      Phone: <br />
                      +971 564564575
                      <br />
                      +971 50902112
                      <br />
                    </Typography>
                    <Typography className="contactUsContent2">
                      Business Center 1, M floor <br />
                      The Meyden Hotel
                      <br />
                      Nadal Al Sheba, Dubai, U.A.E
                      <br />
                    </Typography>
                  </Box>
                </Box>
                <Span sx={{ m: "auto" }}></Span>
              </FooterContent>
            </AppFooter>
          </AppBar>
        </ThemeProvider>
      )}
      {isTabletOrMobile && (
        <ThemeProvider theme={footerTheme}>
          <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
            <AppFooter>
              <FooterContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Logo className="appLogo" />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    // mx: 5,
                    my: 4,
                  }}
                >
                  <Typography className="contactUsMobile">
                    Contact Us
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography className="contactUsContent1">
                      Phone: <br />
                      +971 564564575
                      <br />
                      +971 50902112
                      <br />
                    </Typography>
                    <Typography className="contactUsContent2Mobile">
                      Business Center 1, M floor <br />
                      The Meyden Hotel
                      <br />
                      Nadal Al Sheba, Dubai, U.A.E
                      <br />
                    </Typography>
                  </Box>
                </Box>

                <Span sx={{ m: "auto" }}></Span>
              </FooterContent>
            </AppFooter>
          </AppBar>
        </ThemeProvider>
      )}
    </>
  );
};

export default ClientFooter;
