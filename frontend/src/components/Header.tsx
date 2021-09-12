import React, { useContext } from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios';

import ErrorSnackbar from './ErrorSnackbar';

import { ErrorContext } from '../context/Error'

const Header = () => {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])
  const { setMessage } = useContext(ErrorContext)

  const history = useHistory()

  const onClick = () => {
    const options = {
      headers: {
        'content-type': 'application/json',
        'authorization': cookies.jwt
      },
      withCredentials: true
    }

    if (cookies.jwt) {
      axios.delete('http://localhost:3000/user/logout', options)
        .then(() => {
          removeCookie("jwt")
          setMessage("ログアウトしました")
          history.push('/')
        })
        .catch(() => {
          setMessage("ログアウト処理に失敗しました")
        })
    } else {
      history.push('/login')
    }
  }

  const onClickTitle = () => {
    history.push('/')
  }

  const buttonText = cookies.jwt ? "Logout" : "Login"

  return (
    <>
      <ErrorSnackbar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={onClickTitle}>
              JWTサンプルアプリ
            </Typography>
            <Button color="inherit" onClick={onClick}>{buttonText}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
