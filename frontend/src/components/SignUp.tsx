import React, { FC, useState, useContext } from 'react'
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import { ErrorContext } from '../context/Error';

import ErrorSnackbar from './ErrorSnackbar';
import Header from './Header';

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

const SignUp: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const { setMessage } = useContext(ErrorContext)

  const signUpHandler = (event: React.FormEvent<HTMLFormElement>) => {
    if (password !== passwordConfirm) return undefined;

    const param = {
      "user_auth": {
        "user_id": userId,
        "password": password
      },
      "user_info": {
        "name": name
      }
    }

    const options = {
      headers: {
        'content-type': 'application/json'
      },
      withCredentials: true
    }

    axios.post('http://localhost:3000/user', param, options)
      .then((response) => { 
        setCookie("jwt", response.headers["authorization"])
        history.push('/user-info')
      })
      .catch(() => { 
        setMessage('ユーザの登録に失敗しました。')
      })

    // htmlのデフォルト動作を抑止する
    event.preventDefault();
  }

  return (
    <>
    <Header />
    <Container component="main" maxWidth="xs">
      <ErrorSnackbar />
      <div className={classes.paper}>
        <Typography>Sign Up</Typography>
        <form className={classes.form} onSubmit={signUpHandler}>
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            id="name"
            type="text"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password confirm"
            id="password-confirm"
            type="password"
            autoFocus
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Sign Up</Button>
        </form>
      </div>
    </Container>
    </>
  )
}

export default SignUp
