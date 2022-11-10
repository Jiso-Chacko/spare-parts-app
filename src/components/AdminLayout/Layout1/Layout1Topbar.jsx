import React from "react";
import {
  Avatar,
  Hidden,
  IconButton,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Box, styled, useTheme } from "@mui/system";
import TopbarMenu from "./TopbarMenu";
import TopbarSearchbox from "./TopbarSearchbox";
import { themeShadows } from "../SidenavTheme/themeColors";
import useSettings from "../../../hooks/useSettings";
import { Link } from "react-router-dom";
import clsx from "clsx";

const topBarHeight = 64;

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : "",
}));

const Span = ({ children, className, ellipsis, textTransform, ...props }) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: "all 0.3s ease",
  boxShadow: themeShadows[8],
  height: topBarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  paddingLeft: 18,
  paddingRight: 20,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 24,
  padding: 4,
  "& span": { margin: "0 8px" },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary },
}));

const IconBox = styled("div")(({ theme }) => ({
  display: "inherit",
  [theme.breakpoints.down("md")]: { display: "none !important" },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      Layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { Layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = Layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = Layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            {/* <Icon>menu</Icon> */}
            <MenuIcon />
          </StyledIconButton>

          <IconBox>
            <StyledIconButton>
              {/* <Icon>mail_outline</Icon> */}
              <BootstrapTooltip title="Mail">
                <MailIcon />
              </BootstrapTooltip>
            </StyledIconButton>

            <StyledIconButton>
              {/* <Icon>web_asset</Icon> */}
              <WebAssetIcon />
            </StyledIconButton>

            <StyledIconButton>
              {/* <Icon>star_outline</Icon>*/}
              <StarOutlineIcon />
            </StyledIconButton>
          </IconBox>
        </Box>
        <Box display="flex" alignItems="center">
          <TopbarSearchbox />
          <TopbarMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    Hi <strong>Admin</strong>
                  </Span>
                </Hidden>
                <Avatar sx={{ cursor: "pointer" }} />
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                {/* <Icon> home </Icon> */}
                <HomeIcon />
                <Span> Home </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Link to="/adminProfile">
                {/* <Icon> person </Icon> */}
                <PersonIcon />
                <Span> Profile </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              {/* <Icon> settings </Icon> */}
              <SettingsIcon />
              <Span> Settings </Span>
            </StyledItem>

            <StyledItem>
              {/* <Icon> power_settings_new </Icon> */}
              <PowerSettingsNewIcon />
              <Span> Logout </Span>
            </StyledItem>
          </TopbarMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default Layout1Topbar;
