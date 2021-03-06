import React, { useState, useContext } from 'react'
import axios from 'axios'
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import Message from './Message';

import { ErrorContext } from '../context/Error';
import Header from './Header'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])

  const { setMessage, setSeverity } = useContext(ErrorContext)

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = {
      "user_auth": {
        "user_id": userId,
        "password": password
      }
    }

    const options = {
      headers: {
        'content-type': 'application/json'
      },
      withCredentials: true
    }

    axios.post('http://localhost:3000/user/login', params, options)
      .then((response) => { 
        if (response.headers["authorization"] === undefined) {
          setSeverity("error")
          setMessage("IDまたはパスワードが違います")
        } else {
          setCookie("jwt", response.headers["authorization"]);
          history.push('/user-info');
        }
      })
      .catch(() => { 
        setSeverity("error")
        setMessage("ログインに失敗しました")
        history.push('/login')
      })
  }

  return (
    <>
    <Header></Header>
    <Container component="main" maxWidth="xs">
      <Message />
      <div className={classes.paper}>
        <Typography>Login</Typography>
      <form className={classes.form} onSubmit={loginHandler}>
        <TextField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="User Id"
          id="user-id"
          autoFocus
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          id="password"
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >Login</Button>
      </form>
      </div>
    </Container>
    </>
  )
}

export default Login
