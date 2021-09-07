import React, { useState, useEffect } from 'react'
import axios from 'axios';

const options = {
  headers: {
    'content-type': 'application/json'
  },
  withCredentials: true
}

const UserInfo = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/user/show/1", options)
      .then((res) => setMessage(res.data.name))
      .catch((error) => console.log(error))
  })

  return (
    <div>
      {message}
    </div>
  )
}

export default UserInfo
