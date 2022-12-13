import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function DefaultLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}
