import { ThemeProvider, useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/material';
import AppSuspense from '../AppSuspense';
import useSettings from '../../hooks/useSettings';
import React, { useEffect, useRef } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SecondarySidebar from './SecondarySidebar/SecondarySidebar';
import Layout1Sidenav from './Layout1/Layout1Sidenav';
import Layout1Topbar from './Layout1/Layout1Topbar';
import AdminDashboard from "../../screens/AdminDashboard";


const sideNavWidth = 260
const sidenavCompactWidth = 80


const Layout1Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.default,
}));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'column',
}));


const LayoutContainer = styled(Box)(({ width, secondarySidebar }) => ({
  height: '100vh',
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'column',
  verticalAlign: 'top',
  marginLeft: width,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  marginRight: secondarySidebar.open ? 50 : 0,
}));


const SidenavTheme = ({ children }) => {
  const theme = useTheme();
  const { settings } = useSettings();
  const sidenavTheme = settings.themes[settings.Layout1Settings.leftSidebar.theme] || theme;

  return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
};

const Layout = () => {
  const { settings, updateSettings } = useSettings();
  const { Layout1Settings, secondarySidebar } = settings;
  const topbarTheme = settings.themes[Layout1Settings.topbar.theme];
  const {
    leftSidebar: { mode: sidenavMode, show: showSidenav },
  } = Layout1Settings;

  const getSidenavWidth = () => {
    switch (sidenavMode) {
      case 'full':
        return sideNavWidth;

      case 'compact':
        return sidenavCompactWidth;

      default:
        return '0px';
    }
  };

  const sidenavWidth = getSidenavWidth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef({ isMdScreen, settings });
  const layoutClasses = `theme-${theme.palette.type}`;

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.Layout1Settings.leftSidebar.mode;
    if (settings.Layout1Settings.leftSidebar.show) {
      let mode = isMdScreen ? 'close' : sidebarMode;
      updateSettings({ Layout1Settings: { leftSidebar: { mode } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMdScreen]);

  return (
    <Layout1Root className={layoutClasses}>
      {showSidenav && sidenavMode !== 'close' && (
        <SidenavTheme>
          <Layout1Sidenav />
        </SidenavTheme>
      )}

<LayoutContainer width={sidenavWidth} secondarySidebar={secondarySidebar}>
        {Layout1Settings.topbar.show && Layout1Settings.topbar.fixed && (
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar fixed={true} className="elevation-z8" />
          </ThemeProvider>
        )}

{/* {settings.perfectScrollbar && ( */}
          {/* <StyledScrollBar>
            {Layout1Settings.topbar.show && !Layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}
            <Box flexGrow={1} position="relative">
              <AppSuspense>
                <Outlet />
              </AppSuspense>
            </Box>

            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </StyledScrollBar> */}
        {/* // )} */}

{!settings.perfectScrollbar && (
          <ContentBox>
            {Layout1Settings.topbar.show && !Layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}

            <Box flexGrow={1} position="relative">
              {/* <AppSuspense> */}
            <Outlet />
              {/* </AppSuspense> */}
            </Box>

            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </ContentBox>
         )}

{settings.footer.show && settings.footer.fixed && <Footer />}

        </LayoutContainer>
      {settings.secondarySidebar.show && <SecondarySidebar />}

    </Layout1Root>
  )
}

export default React.memo(Layout);