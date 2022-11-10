import React, { createContext, useState } from 'react'
import { createTheme } from '@mui/material';
import { forEach, merge } from 'lodash';
import { themeColors } from '../components/AdminLayout/SidenavTheme/themeColors';
import themeOptions from '../components/AdminLayout/SidenavTheme/themeOptions';


function createMatxThemes() {
    let themes = {};
  
    forEach(themeColors, (value, key) => {
      themes[key] = createTheme(merge({}, themeOptions, value));
    });
  
    return themes;
  }


const Layout1Settings = {
    leftSidebar: {
      show: true,
      mode: 'full', // full, close, compact, mobile,
      theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
      bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg',
    },
    topbar: {
      show: true,
      fixed: true,
      theme: 'whiteBlue', // View all valid theme colors inside MatxTheme/themeColors.js
    },
  };

// MATX LAYOUT SETTINGS
// UPDATE BELOW CODE
// DOC http://demos.ui-lib.com/matx-react-doc/layout.html
const MatxLayoutSettings = {
  activeLayout: 'layout1', // layout1, layout2
  activeTheme: 'blue', // View all valid theme colors inside MatxTheme/themeColors.js
  perfectScrollbar: false,

  themes: createMatxThemes(),
  Layout1Settings, // open Layout1/Layout1Settings.js

  secondarySidebar: {
    show: true,
    open: false,
    theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
  },
  // Footer options
  footer: {
    show: true,
    fixed: false,
    theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
  },
};


const SettingsContext = createContext({
    settings: MatxLayoutSettings,
    updateSettings: () => {},
})


export const SettingsProvider = ({ settings, children }) => {
    const [currentSettings, setCurrentSettings] = useState(
        settings || MatxLayoutSettings
    )

    const handleUpdateSettings = (update = {}) => {
        const marged = merge({}, currentSettings, update)
        setCurrentSettings(marged)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: currentSettings,
                updateSettings: handleUpdateSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext