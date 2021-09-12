import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Header = () => {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])

  const history = useHistory()

  const onClick = () => {
    if (cookies) {
      removeCookie("jwt")
      history.push('/')
    } else {
      history.push('/')
    }
  }

  const buttonText = cookies.jwt ? "Logout" : "Login"

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            JWTサンプルアプリ
          </Typography>
          <Button color="inherit" onClick={onClick}>{buttonText}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
