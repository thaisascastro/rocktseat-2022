import { Fragment, useState } from 'react'
import { Button } from './components/button'

export default function App() {
  return (
   <Fragment>
    <Button variant='primary' />
    <Button variant='secondary'/>
    <Button variant='success'/>
    <Button variant='danger'/>
   </Fragment>
  )
}

