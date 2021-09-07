import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie'

const UserInfo = () => {
  const [message, setMessage] = useState("");
    // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])

  useEffect(() => {
    const options = {
      headers: {
        'content-type': 'application/json',
        'authorization': cookies.jwt
      },
      withCredentials: true,
    }

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
