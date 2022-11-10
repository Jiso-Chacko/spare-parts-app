import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, createStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./VerticalNav.css";
import OrdersCard from "./OrdersCard";
import Profile from "./Profile";

const theme = createTheme({
  Tab: {
    root: {
      background: "red",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "auto",
        }}
      >
        <Box sx={{ border: "19px solid #F4F4F4", width: "290px" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="My Account"
            // sx={{ borderRight: 1, borderColor: "divider" }}
            className="styleTab"
          >
            <Tab label="My Profile" {...a11yProps(0)} />
            <Tab label="My Orders" {...a11yProps(1)} />
            {/* <Tab label="Help & Support" {...a11yProps(2)} />
          <Tab label="Logout" {...a11yProps(3)} /> */}
            {/* <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="tabPanel">
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1} className="tabPanel">
          <OrdersCard />
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
      </Box>
    </ThemeProvider>
  );
}
