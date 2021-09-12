import React, { FC, createContext, useState } from 'react'

type ContextType = {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

const ErrorContext = createContext({} as ContextType)

const ErrorProvider: FC =({children}) => {
  const [message, setMessage] = useState("")

  return (
    <ErrorContext.Provider value={{message, setMessage}}>
      {children}
    </ErrorContext.Provider>
  )
}

export { ErrorContext, ErrorProvider }
