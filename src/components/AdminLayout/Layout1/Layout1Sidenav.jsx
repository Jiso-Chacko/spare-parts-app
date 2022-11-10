import React from 'react'
import { Hidden, Switch } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { themeShadows } from '../SidenavTheme/themeColors'
import useSettings from '../../../hooks/useSettings';
import Brand from '../Brand';
import Sidenav from '../Sidenav';


const sidenavCompactWidth = 80
const sideNavWidth = 260

const convertHexToRGB = (hex) => {
    // check if it's a rgba
    if (hex.match('rgba')) {
      let triplet = hex.slice(5).split(',').slice(0, -1).join(',');
      return triplet;
    }
  
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
  
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
  };


  const SidebarNavRoot = styled(Box)(({ theme, width, primaryBg, bgImgURL }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: width,
    boxShadow: themeShadows[8],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    zIndex: 111,
    overflow: 'hidden',
    color: theme.palette.text.primary,
    transition: 'all 250ms ease-in-out',
    backgroundImage: `linear-gradient(to bottom, rgba(${primaryBg}, 0.96), rgba(${primaryBg}, 0.96)), url(${bgImgURL})`,
    '&:hover': {
      width: sideNavWidth,
      '& .sidenavHoverShow':     {
        display: 'block',
      },
      '& .compactNavItem': {
        width: '100%',
        maxWidth: '100%',
        '& .nav-bullet': {
          display: 'block',
        },
        '& .nav-bullet-text': {
          display: 'none',
        },
      },
    },
  }));


  const NavListBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }));


const Layout1Sidenav = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.Layout1Settings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidenavWidth = () => {
    switch (mode) {
      case 'compact':
        return sidenavCompactWidth;
      default:
        return sideNavWidth;
    }
  };

  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      Layout1Settings: {
        leftSidebar: {
          ...sidebarSettings,
        },
      },
    });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === 'compact' ? 'full' : 'compact' });
  };

  return (
    <SidebarNavRoot bgImgURL={bgImgURL} primaryBg={primaryRGB} width={getSidenavWidth()}>
      <NavListBox>
        <Brand>
        <Hidden smDown>
            <Switch
              onChange={handleSidenavToggle}
              checked={leftSidebar.mode !== 'full'}
              color="secondary"
              size="small"
            />
        </Hidden>
        </Brand>
        <Sidenav />
        </NavListBox>
    </SidebarNavRoot>
  )
}

export default Layout1Sidenav