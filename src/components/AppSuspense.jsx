import { React, Suspense } from 'react'
import Loading from './Loading'


const AppSuspense = ({ childern }) => {
  return (
    <Suspense fallback={<Loading />}>
    {childern}
    </Suspense>
  )
}

export default AppSuspense