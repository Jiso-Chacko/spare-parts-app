import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-grid-carousel'
import { Paper } from '@mui/material'
import { Box, Container } from '@mui/system'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ReactComponent as Cart } from "../Utils/AppUtils/Cart2.svg";

import "./RelatedParts.css"

function RelatedParts() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    <div className='relatedParts-container' >
        <div className='header'>
            <p>Related Parts</p>
        </div>
    <Carousel responsive={responsive} cols={3} rows={1} gap={1} >
        <Carousel.Item>
            <Box className="productCarouselContainer">
              <Paper>
                <div className="Cardheader">
                  <div className="discountBadge">
                    <p>10%</p>
                  </div>
                  <div>
                    <FavoriteBorderIcon sx={{ mr: 2 }} />
                  </div>
                </div>
                <Link to="/product/productDetailedView">
                  <img
                    src="/assets/images/ProductImages/image 2.png"
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
                {/* <h2>w3js.com - web front-end studio</h2>
            <p>Fixing CSS load order/style.chunk.css incorrect in Nextjs</p> */}
                <Container>
                  <h2 className="proCauroselTitle">
                    Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
                  </h2>
                </Container>
                <Container>
                  <div className="footerDiv">
                    <div className="priceDiv">
                      <div>
                        <h4 className="proCarouselPrice">₹530</h4>
                      </div>
                      <div>
                        <p className="proCarouselPriceStriped">₹550</p>
                      </div>
                    </div>
                    <Cart />
                  </div>
                </Container>
                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
              </Paper>
            </Box>
            </Carousel.Item>
            <Carousel.Item>
            <Box className="proCarouselContainer">
              <Paper>
                <div className="Cardheader">
                  <div className="discountBadge">
                    <p>10%</p>
                  </div>
                  <div>
                    <FavoriteBorderIcon sx={{ mr: 2 }} />
                  </div>
                </div>
                <Link to="/product/productDetailedView">
                  <img
                    src="/assets/images/ProductImages/image 2.png"
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
                {/* <h2>w3js.com - web front-end studio</h2>
            <p>Fixing CSS load order/style.chunk.css incorrect in Nextjs</p> */}
                <Container>
                  <h2 className="proCauroselTitle">
                    Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
                  </h2>
                </Container>
                <Container>
                  <div className="footerDiv">
                    <div className="priceDiv">
                      <div>
                        <h4 className="proCarouselPrice">₹530</h4>
                      </div>
                      <div>
                        <p className="proCarouselPriceStriped">₹550</p>
                      </div>
                    </div>
                    <Cart />
                  </div>
                </Container>
                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
              </Paper>
            </Box>
            </Carousel.Item>
            <Carousel.Item>    
            <Box className="proCarouselContainer">
              <Paper>
                <div className="Cardheader">
                  <div className="discountBadge">
                    <p>10%</p>
                  </div>
                  <div>
                    <FavoriteBorderIcon sx={{ mr: 2 }} />
                  </div>
                </div>
                <Link to="/product/productDetailedView">
                  <img
                    src="/assets/images/ProductImages/image 2.png"
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
                {/* <h2>w3js.com - web front-end studio</h2>
            <p>Fixing CSS load order/style.chunk.css incorrect in Nextjs</p> */}
                <Container>
                  <h2 className="proCauroselTitle">
                    Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
                  </h2>
                </Container>
                <Container>
                  <div className="footerDiv">
                    <div className="priceDiv">
                      <div>
                        <h4 className="proCarouselPrice">₹530</h4>
                      </div>
                      <div>
                        <p className="proCarouselPriceStriped">₹550</p>
                      </div>
                    </div>
                    <Cart />
                  </div>
                </Container>
                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
              </Paper>
            </Box>
            </Carousel.Item>
            <Carousel.Item>
            <Box className="proCarouselContainer">
              <Paper>
                <div className="Cardheader">
                  <div className="discountBadge">
                    <p>10%</p>
                  </div>
                  <div>
                    <FavoriteBorderIcon sx={{ mr: 2 }} />
                  </div>
                </div>
                <Link to="/product/productDetailedView">
                  <img
                    src="/assets/images/ProductImages/image 2.png"
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
                {/* <h2>w3js.com - web front-end studio</h2>
            <p>Fixing CSS load order/style.chunk.css incorrect in Nextjs</p> */}
                <Container>
                  <h2 className="proCauroselTitle">
                    Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black
                  </h2>
                </Container>
                <Container>
                  <div className="footerDiv">
                    <div className="priceDiv">
                      <div>
                        <h4 className="proCarouselPrice">₹530</h4>
                      </div>
                      <div>
                        <p className="proCarouselPriceStriped">₹550</p>
                      </div>
                    </div>
                    <Cart />
                  </div>
                </Container>
                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
              </Paper>
            </Box>
            </Carousel.Item>
          </Carousel>
          </div>
  )
}

export default RelatedParts