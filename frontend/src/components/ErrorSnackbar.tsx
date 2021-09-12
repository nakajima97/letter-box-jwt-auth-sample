import React, { FC, useState, useContext } from 'react'
import { Snackbar, Alert } from '@mui/material'

import { ErrorContext } from '../context/Error';

type Props = {
}

const ErrorSnackbar: FC<Props> = () => {
  const { message, setMessage } = useContext(ErrorContext)

  const handleClose = () => {
    setMessage("");
  }

  const handleOpen = message ? true : false

  return (
    <div>
      <Snackbar open={handleOpen} onClose={handleClose}>
        <Alert severity='error'>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ErrorSnackbar
