import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./MakersCard.css";

const Makers = [
  {
    title: "maruti",
  },
  {
    title: "hyundai",
  },
  {
    title: "toyota",
  },
  {
    title: "honda",
  },
  {
    title: "tata",
  },
  {
    title: "chevrolet",
  },
  {
    title: "mahindra",
  },
  {
    title: "ford",
  },
  {
    title: "renault",
  },
  {
    title: "skoda",
  },
  {
    title: "volkswagen",
  },
  {
    title: "mitsubishi",
  },
  {
    title: "nissan",
  },
  {
    title: "bmw",
  },
  {
    title: "mercedes benz",
  },
  {
    title: "fiat",
  },
  {
    title: "audi",
  },
  {
    title: "land rover",
  },
  {
    title: "jaguar",
  },
  {
    title: "kia",
  },
];

const MakersCards = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Container>
          <Grid>
            <Box
              sx={{
                // p: 2,
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr  1fr 1fr 1fr 1fr" },
                gap: 2,
                mt: 4,
              }}
            >
              {Makers.map((item, index) => (
                <Card className="makersCard" key={index}>
                  <CardContent>
                    <Link to="/product/productBrand">
                      <Typography className="cardContent">
                        {item.title}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Container>
      )}
      {isTabletOrMobile && (
        <Container>
          <Grid>
            <Box
              sx={{
                // p: 2,
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr" },
                gap: 2,
                mt: 4,
                justifyItems: "center",
              }}
            >
              {Makers.slice(0, 8).map((item, index) => (
                <Card className="makersCardMobile" key={index}>
                  <CardContent>
                    <Link to="/product/productBrand">
                      <Typography className="cardContentMobile">
                        {item.title}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default MakersCards;
