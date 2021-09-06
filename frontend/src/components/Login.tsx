import React from 'react'
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
        />
        <TextField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          id="password"
          autoFocus
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
