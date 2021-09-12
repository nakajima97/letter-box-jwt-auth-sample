import React from 'react'
import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import Header from './Header'

const Top = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography>トップページ</Typography>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/sign-up">Sign up</Link></p>
      </Container>
    </>
  )
}

export default Top
