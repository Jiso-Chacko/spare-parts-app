import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { useMediaQuery } from "react-responsive";
import "./UserReviewCard.css";

export default function UserReviewCard() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Container sx={{ my: 2, mt: 5, display: "flex" }}>
          <Card
            sx={{
              maxWidth: 385,
              maxHeight: 250,
              mx: 2,
              border: "1px solid #E7E7E7",
              borderBottom: "4px solid #ED2C37",
              borderRadius: "0",
            }}
          >
            <CardContent>
              <Box className="cardTitleContainer">
                <Box>
                  <img
                    src="/assets/images/illustrations/Group 24.png"
                    alt="image"
                    style={{ borderRadius: "3rem" }}
                  />
                </Box>
                <Box>
                  <Typography className="reviewCardTitle">
                    Manas Rajan
                  </Typography>
                  <Box>
                    <img src="/assets/images/Icons/Group 686.svg" />
                  </Box>
                </Box>
              </Box>
              <Typography className="reviewCardBody">
                I'm using boodmo to order spare parts for my workshop. Delivery
                is always fast, prices are very competitive
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 385,
              maxHeight: 250,
              mx: 2,
              border: "1px solid #E7E7E7",
              borderBottom: "4px solid #ED2C37",
              borderRadius: "0",
            }}
          >
            <CardContent>
              <Box className="cardTitleContainer">
                <Box>
                  <img
                    src="/assets/images/illustrations/Group 24.png"
                    alt="image"
                    style={{ borderRadius: "3rem" }}
                  />
                </Box>
                <Box>
                  <Typography className="reviewCardTitle">
                    Abdul Naseer
                  </Typography>

                  <Box>
                    <img src="/assets/images/Icons/Group 686.svg" />
                  </Box>
                </Box>
              </Box>
              <Typography className="reviewCardBody">
                I'm using boodmo to order spare parts for my workshop. Delivery
                is always fast, prices are very competitive Delivery is always
                fast,
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 385,
              maxHeight: 250,
              mx: 2,
              border: "1px solid #E7E7E7",
              borderBottom: "4px solid #ED2C37",
              borderRadius: "0",
            }}
          >
            <CardContent>
              <Box className="cardTitleContainer">
                <Box>
                  <img
                    src="/assets/images/illustrations/Group 24.png"
                    alt="image"
                    style={{ borderRadius: "3rem" }}
                  />
                </Box>
                <Box>
                  <Typography className="reviewCardTitle">
                    Sherin mathew
                  </Typography>

                  <Box>
                    <img src="/assets/images/Icons/Group 686.svg" />
                  </Box>
                </Box>
              </Box>
              <Typography className="reviewCardBody">
                I'm using boodmo to order spare parts for my workshop. Delivery
                is always fast, prices are very competitive Delivery is always
                fast, prices are very competitive
              </Typography>
            </CardContent>
          </Card>
        </Container>
      )}
      {isTabletOrMobile && (
        <Container
          sx={{ my: 2, mt: 5, display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              maxWidth: 385,
              maxHeight: 250,
              mx: 2,
              border: "1px solid #E7E7E7",
              borderBottom: "4px solid #ED2C37",
              borderRadius: "0",
              my: 2,
            }}
          >
            <CardContent>
              <Box className="cardTitleContainer">
                <Box>
                  <img
                    src="/assets/images/illustrations/Group 24.png"
                    alt="image"
                    style={{ borderRadius: "3rem" }}
                  />
                </Box>
                <Box>
                  <Typography className="reviewCardTitle">
                    Manas Rajan
                  </Typography>
                  <Box>
                    <img src="/assets/images/Icons/Group 686.svg" />
                  </Box>
                </Box>
              </Box>
              <Typography className="reviewCardBody">
                I'm using boodmo to order spare parts for my workshop. Delivery
                is always fast, prices are very competitive
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 385,
              maxHeight: 250,
              mx: 2,
              border: "1px solid #E7E7E7",
              borderBottom: "4px solid #ED2C37",
              borderRadius: "0",
              my: 2,
            }}
          >
            <CardContent>
              <Box className="cardTitleContainer">
                <Box>
                  <img
                    src="/assets/images/illustrations/Group 24.png"
                    alt="image"
                    style={{ borderRadius: "3rem" }}
                  />
                </Box>
                <Box>
                  <Typography className="reviewCardTitle">
                    Abdul Naseer
                  </Typography>

                  <Box>
                    <img src="/assets/images/Icons/Group 686.svg" />
                  </Box>
                </Box>
              </Box>
              <Typography className="reviewCardBody">
                I'm using boodmo to order spare parts for my workshop. Delivery
                is always fast, prices are very competitive Delivery is always
                fast,
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 385,
              maxHeight: 250,
              mx: 2,
              border: "1px solid #E7E7E7",
              borderBottom: "4px solid #ED2C37",
              borderRadius: "0",
              my: 2,
            }}
          >
            <CardContent>
              <Box className="cardTitleContainer">
                <Box>
                  <img
                    src="/assets/images/illustrations/Group 24.png"
                    alt="image"
                    style={{ borderRadius: "3rem" }}
                  />
                </Box>
                <Box>
                  <Typography className="reviewCardTitle">
                    Sherin mathew
                  </Typography>

                  <Box>
                    <img src="/assets/images/Icons/Group 686.svg" />
                  </Box>
                </Box>
              </Box>
              <Typography className="reviewCardBody">
                I'm using boodmo to order spare parts for my workshop. Delivery
                is always fast, prices are very competitive Delivery is always
                fast, prices are very competitive
              </Typography>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  );
}
