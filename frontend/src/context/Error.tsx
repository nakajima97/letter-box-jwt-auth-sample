import React, { FC, createContext, useState } from 'react'

type ContextType = {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  severity: 'error' | 'info' | 'success' | 'warning'
  setSeverity: React.Dispatch<React.SetStateAction<"error" | "info" | "success" | "warning">>
}

const ErrorContext = createContext({} as ContextType)

const ErrorProvider: FC =({children}) => {
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState<'error' | 'info' | 'success' | 'warning'>('info')

  return (
    <ErrorContext.Provider value={{message, setMessage, severity, setSeverity}}>
      {children}
    </ErrorContext.Provider>
  )
}

export { ErrorContext, ErrorProvider }
