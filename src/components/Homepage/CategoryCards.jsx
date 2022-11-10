import styled from "@emotion/styled";
import { Grid, Paper, Card, CardContent, Typography } from "@mui/material";
import { Box, Container, display } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./CategoryCard.css";

const Category = [
  {
    title: "Body Parts",
    icon: "/assets/images/Icons/Bodypart.svg",
  },
  {
    title: "Lighting",
    icon: "/assets/images/Icons/Lighting.svg",
  },
  {
    title: "Suspension",
    icon: "/assets/images/Icons/Suspension.svg",
  },
  {
    title: "Air Conditioning",
    icon: "/assets/images/Icons/Airconditioning.svg",
  },
  {
    title: "Body Parts",
    icon: "/assets/images/Icons/Bodypart.svg",
  },
  {
    title: "Lighting",
    icon: "/assets/images/Icons/Lighting.svg",
  },
  {
    title: "Suspension",
    icon: "/assets/images/Icons/Suspension.svg",
  },
  {
    title: "Air Conditioning",
    icon: "/assets/images/Icons/Airconditioning.svg",
  },
  {
    title: "Body Parts",
    icon: "/assets/images/Icons/Bodypart.svg",
  },
  {
    title: "Lighting",
    icon: "/assets/images/Icons/Lighting.svg",
  },
  {
    title: "Suspension",
    icon: "/assets/images/Icons/Suspension.svg",
  },
  {
    title: "Air Conditioning",
    icon: "/assets/images/Icons/Airconditioning.svg",
  },
  {
    title: "Body Parts",
    icon: "/assets/images/Icons/Bodypart.svg",
  },
  {
    title: "Lighting",
    icon: "/assets/images/Icons/Lighting.svg",
  },
  {
    title: "Suspension",
    icon: "/assets/images/Icons/Suspension.svg",
  },
  {
    title: "Air Conditioning",
    icon: "/assets/images/Icons/Airconditioning.svg",
  },
  {
    title: "Body Parts",
    icon: "/assets/images/Icons/Bodypart.svg",
  },
  {
    title: "Lighting",
    icon: "/assets/images/Icons/Lighting.svg",
  },
  {
    title: "Suspension",
    icon: "/assets/images/Icons/Suspension.svg",
  },
  {
    title: "Air Conditioning",
    icon: "/assets/images/Icons/Airconditioning.svg",
  },
  {
    title: "Body Parts",
    icon: "/assets/images/Icons/Bodypart.svg",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    // transform:translate('42px', '18px')
    // transform: translate('200px')
    // transform: 'translate(42px ,18px)',
  },
}));

const CardStyled = styled(Card)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "0px",
  "&:hover": {
    borderBottom: "4px solid #ED2C37",
  },
}));

const CategoryCards = () => {
  const [elevation, setElevation] = useState(1);

  const overPaper = () => {
    setElevation(6);
  };

  const leavePaper = () => {
    setElevation(1);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <Container my={3}>
          <Box>
            <Grid item xs={6} className="paperGrid">
              <Box
                sx={{
                  // p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr  1fr 1fr 1fr 1fr" },
                  gap: 3,
                }}
              >
                {Category.map((item, index) => (
                  <Card key={index} className="catCard">
                    <CardContent>
                      <Link to="/product/productListing">
                        <img src={item.icon} alt="icon" />
                      </Link>
                      <Typography className="catCardTitle">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Box>
        </Container>
      )}

      {isTabletOrMobile && (
        <Container my={3}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "space-evenly",
              display: "flex",

            }}
          >
            <Grid item xs={6} className="paperGrid">
              <Box
                sx={{
                  // p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr 1fr" },
                  gap: 3,
                }}
              >
                {Category.slice(0, 6).map((item, index) => (
                  <Card key={index} className="catCard">
                    <CardContent>
                      <Link to="/product/productListing">
                        <img src={item.icon} alt="icon" />
                      </Link>
                      <Typography className="catCardTitle">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
};

export default CategoryCards;
