import { Box, Container } from "@mui/system";
import React from "react";
import Carousel from "react-grid-carousel";
import { useMediaQuery } from "react-responsive";
import "./ProductImgCarousel.css";

const ProductImgCarousel = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const carousalStyle = {
    border : "1px solid black"
  }

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <Container className="container">
            <div className="productView">
              <Carousel containerStyle={{  
                width:"34.5rem",
                height:"31.875rem",
                backgroundColor:"#F4F4F4",
                marginBottom:"1rem"
              }} cols={1} rows={1} gap={0} loop  >
                <Carousel.Item>
                  <img
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="miniPics" >
                  <img className="miniPicsBig"
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
                  <img className="miniPicsBig"
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
                  <img className="miniPicsBig"
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
                  <img className="miniPicsBig"
                    width="100%"
                    src="/assets/images/ProductImages/alloy.png"
                  />
              </div>
            </div>
          </Container>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Container className="containerMobile">
            <div className="productViewMob">
                <Carousel containerStyle={{  
                  width:"22.75rem",
                  height:"21.06rem",
                  backgroundColor:"#F4F4F4",
                  marginBottom:"1rem"
                }} cols={1} rows={1} gap={0} loop  >
                  <Carousel.Item>
                    <img 
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="miniPics" >
                    <img className="miniPicsSm"
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                    <img className="miniPicsSm"
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                    <img className="miniPicsSm"
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                    <img className="miniPicsSm"
                      width="100%"
                      src="/assets/images/ProductImages/alloy.png"
                    />
                </div>
              </div>
          </Container>
        </>
      )}
    </>
  );
};

export default ProductImgCarousel;
