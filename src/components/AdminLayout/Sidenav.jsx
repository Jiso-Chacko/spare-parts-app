import { Fragment } from 'react'
import { styled } from '@mui/system';
import VertivalNav from './VertivalNav';
import useSettings from '../../hooks/useSettings';
import Scrollbar from 'react-perfect-scrollbar';
import { navigations } from './Layout1/navigation';


const StyledScrollBar = styled(Scrollbar)(() => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
  }));


  const SideNavMobile = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.54)',
    zIndex: -1,
    [theme.breakpoints.up('lg')]: { display: 'none' },
  }));




const Sidenav = ({ children }) => {

  const { settings, updateSettings } = useSettings();

  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings,
        },
      },
    });
  };

  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
      {children}
      <VertivalNav items={navigations} />
    </StyledScrollBar>
    <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
   </Fragment>
  )
}

export default Sidenav