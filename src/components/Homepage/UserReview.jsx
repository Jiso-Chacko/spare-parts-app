import React from "react";
import UserReviewTitle from "./UserReviewTitle";
import "./UserReview.css";
import { Box } from "@mui/system";
import MakersCards from "./MakersCards";
import { useMediaQuery } from "react-responsive";
import UserReviewCard from "./UserReviewCards";

const UserReview = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="userReviewMain">
          <div>
            <UserReviewTitle />
          </div>
          <Box>
            <UserReviewCard />
          </Box>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box className="userReviewMainMobile">
          <div>
            <UserReviewTitle />
          </div>
          <Box>
            <UserReviewCard />
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserReview;
