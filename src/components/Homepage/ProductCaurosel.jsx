import React from "react";
import { Paper, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ReactComponent as Cart } from "../Utils/AppUtils/Cart2.svg";
import { useMediaQuery } from "react-responsive";
import "./ProductCaurosel.css";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function (props) {
  const [expanded, setExpanded] = React.useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
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
    <>
      {isDesktopOrLaptop && (
        <Container sx={{ alignItems: "center" }}>
          <Typography className="popularItmes">
            Popular <span style={{ color: "#ED2C37" }}>Items</span>
          </Typography>
          <Carousel responsive={responsive}>
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
          </Carousel>
        </Container>
      )}

      {isTabletOrMobile && (
        <Container
          sx={{
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography className="popularItmesMobile">
              Popular <span style={{ color: "#ED2C37" }}>Items</span>
            </Typography>
          </Box>
          <Box sx={{ width: "100%", alignSelf: "center", ml: 2.2 }}>
            <Carousel responsive={responsive}>
              <Box className="proCarouselContainerMobile">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
                  </Paper>
                </Box>
              </Box>

              <Box className="proCarouselContainerMobile">
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

              <Box className="proCarouselContainerMobile">
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

              <Box className="proCarouselContainerMobile">
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

              <Box className="proCarouselContainerMobile">
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
            </Carousel>
          </Box>
        </Container>
      )}
    </>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
