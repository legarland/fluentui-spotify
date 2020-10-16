import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useAccessToken = () => {
  const [token, setToken] = useState(null)
  const _token = Cookies.get('spotifyAuthToken')
  useEffect(() => {
    setToken(_token)
  }, [_token])

  return token
}

export default useAccessToken
