import React, { Fragment } from "react";
import { Card, Grid, styled, useTheme } from "@mui/material";
import StatCards from "../components/AdminDashboard/StatCards";
import TopSelling from "../components/AdminDashboard/TopSelling";
import StatCards2 from "../components/AdminDashboard/StatCards2";
import Rowcards from "../components/AdminDashboard/Rowcards";
import DoughnutChart from "../components/AdminDashboard/DoughnutChart";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const AdminDashboard = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <StatCards />
            <TopSelling />
            <StatCards2 />
            <H4>Ongoing Projects</H4>
            <Rowcards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>
              <DoughnutChart
                height="300px"
                color={[
                  palette.primary.dark,
                  palette.primary.main,
                  palette.primary.light,
                ]}
              />
            </Card>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default AdminDashboard;
