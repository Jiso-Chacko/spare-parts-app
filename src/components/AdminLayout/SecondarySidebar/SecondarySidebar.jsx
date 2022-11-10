import React from 'react'
import useSettings from '../../../hooks/useSettings'
import SecondarySidenavTheme from './SecondarySidenavTheme'
import SecondarySidebarContent from './SecondarySidebarContent'

const SecondarySidebar = () => {
  const { settings } = useSettings();
  const secondarySidebarTheme = settings.themes[settings.secondarySidebar.theme];
  
  return (
    <SecondarySidenavTheme theme={secondarySidebarTheme}>
      {settings.secondarySidebar.open && <SecondarySidebarContent />}
    </SecondarySidenavTheme>
  )
}

export default SecondarySidebar