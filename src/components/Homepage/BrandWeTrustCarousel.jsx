import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";
import React from "react";
import Carousel from "react-grid-carousel";

const Item = [
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/mobil.png",
  },
  {
    id: 2,
    image: "/assets/images/BrandsWeTrust/image 10.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/image 11.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/image 12.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/image 14.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/image 15.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/image 10.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/mobil.png",
  },
  {
    id: 1,
    image: "/assets/images/BrandsWeTrust/image 11.png",
  },
];

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

const BrandWeTrustCarousel = () => {
  return (
    <Carousel
      cols={5}
      rows={1}
      gap={20}
      hideArrow={true}
      loop
      autoplay={3500}
      breakpoint={800}
      showDots
      dotColorActive="#ED2C37"
    >
      {Item.map((brand) => (
        <Carousel.Item key={brand.id}>
          <CardStyled>
            <CardContent>
              <img width="100% " src={brand.image} />
            </CardContent>
          </CardStyled>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <img width="100% " src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100% " src="https://picsum.photos/800/600?random=4" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=5" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=6" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=7" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=8" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=9" />
      </Carousel.Item> */}
      {/* <Carousel.Item> */}
      {/* anything you want to show in the grid */}
      {/* </Carousel.Item> */}
    </Carousel>
  );
};

export default BrandWeTrustCarousel;
