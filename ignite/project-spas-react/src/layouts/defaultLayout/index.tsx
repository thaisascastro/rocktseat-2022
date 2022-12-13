import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styled'

export function DefaultLayout() {
  return (
    <Fragment>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </Fragment>
  )
}
