import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

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

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography>Login</Typography>
      <form className={classes.form}>
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
        >Login</Button>
      </form>
      </div>
    </Container>
  )
}

export default Login
