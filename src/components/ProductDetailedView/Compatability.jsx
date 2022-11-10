import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Carousel from "react-grid-carousel";
import { useMediaQuery } from "react-responsive";

import React from "react";
import "./Compatibility.css";

const CardStyled = styled(Card)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "0px",

  "&:hover": {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px !important",
  },
}));

const brandCars = [
  {
    id: 1,
    title: "Altroz",
    img: "/assets/images/ProductImages/altroz.png",
  },
  {
    id: 2,
    title: "Nexon",
    img: "/assets/images/ProductImages/nexon.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
  {
    id: 3,
    title: "Punch",
    img: "/assets/images/ProductImages/punch.png",
  },
];

const Compatability = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="compatability">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100vw"}} >
              <div>
                  <Box>
                    <Typography className="title">Compatibility</Typography>
                    <Typography className="subTitle">
                      This part is compatible with all the
                    </Typography>
                  </Box>
                </div>
                <div>
                  <Card className="compatCard">
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/images/ProductImages/tata.png" alt="" />
                        <Typography className="compatCardTitle">TATA</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </div>
                <div style={{
                  width:"45rem"
                }} >
                    <Carousel  
                        cols={3}
                        rows={1}
                        gap={1}
                        >
                          {brandCars.map((car,index)=>(
                            <Carousel.Item key={index} >
                            <Card className="compatCard">
                              <CardContent>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                  }}
                                >
                                  <img src={car.img} alt="" />
                                  <Typography className="compatCardSubTitle">{car.title}</Typography>
                                </Box>
                              </CardContent>
                            </Card>
                          </Carousel.Item>
                          ))}
                    </Carousel>
                  </div>
        </div>
          </Box>
      )}
      {isTabletOrMobile && (
        <>
          <Box className="compatabilityMobile">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography className="titleMobileCompat">
                Compatibility
              </Typography>
              <Typography className="subTitleComptMobile">
                This part is compatible with all the
              </Typography>
            </Box>
            <Card className="compatCardMainMobile">
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/ProductImages/tata.png" alt="" />
                  <Typography className="compatCardTitle">TATA</Typography>
                </Box>
              </CardContent>
            </Card>
            <Box sx={{ mt: 2, width: "20rem" }}>
              <Carousel
                cols={5}
                rows={1}
                gap={5}
                hideArrow={true}
                loop
                autoplay={3500}
                breakpoint={1000}
                showDots
                dotColorActive="#ED2C37"
              >
                {brandCars.map((car) => (
                  <Carousel.Item key={car.id}>
                    {/* <Card className="compatCardMobile"> */}
                    <CardContent className="compatCardMobile">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <img src={car.img} alt="" />
                        <Typography className="compatCardSubTitle">
                          {car.title}
                        </Typography>
                      </Box>
                    </CardContent>
                    {/* </Card> */}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Compatability;
