import React, { useState } from 'react'
import axios from 'axios'
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

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
  // eslint-disable-next-line
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const params = {
      "user_admin": {
        "email": email,
        "password": password
      }
    }

    const header = {
      headers: {
        'content-type': 'application/json'
      }
    }

    axios.post('http://localhost:3000/user/login', params, header)
    .then((response) => { 
      console.log(response.headers)
      history.push('/user-info')
    })
    .catch((error) => { 
      console.log('失敗')
      console.log(error)
    })

    event.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography>Login</Typography>
      <form className={classes.form} onSubmit={loginHandler}>
        <TextField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          id="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          // onClick={loginHandler}
        >Login</Button>
      </form>
      </div>
    </Container>
  )
}

export default Login
