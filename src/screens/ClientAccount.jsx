import { Container } from "@mui/system";
import React from "react";
import VerticalNav from "../components/UserAccount/VerticalNav";
import Profile from "../components/UserAccount/Profile";
import { useMediaQuery } from "react-responsive";

const ClientAccount = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div>
      <Container sx={{ my: 5 }}>
        {isDesktopOrLaptop && <VerticalNav />}
        {isTabletOrMobile && <Profile />}
      </Container>
    </div>
  );
};

export default ClientAccount;
