import React, { FC, useContext } from 'react'
import { Snackbar, Alert } from '@mui/material'

import { ErrorContext } from '../context/Error';

const Message: FC = () => {
  const { message, setMessage, severity } = useContext(ErrorContext)

  const handleClose = () => {
    setMessage("");
  }

  const handleOpen = message ? true : false

  return (
    <div>
      <Snackbar open={handleOpen} onClose={handleClose}>
        <Alert severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Message
