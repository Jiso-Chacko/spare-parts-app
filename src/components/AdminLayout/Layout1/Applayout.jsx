import React from 'react'
import AppSuspense from '../../AppSuspense'
import useSettings from '../../../hooks/useSettings'
import { Applayouts } from './index'
import Layout from '../Layout'

const Applayout = (props) => {
  const { settings } = useSettings();
//   const Layout = Applayouts[settings.activeLayout];

  return (
    <AppSuspense>
      <Layout  />
    </AppSuspense>
  )
}

export default Applayout;