import { useState, useEffect } from 'react'
import Spotify from 'spotify-web-api-js'
import useAccessToken from './useAccessToken'

const useSpotify = () => {
  const [spotify, setSpotify] = useState(null)
  const accessToken = useAccessToken()

  useEffect(() => {
    if (accessToken) {
      const s = new Spotify()
      s.setAccessToken(accessToken)
      setSpotify(s)
    }
  }, [accessToken])

  return spotify
}

export default useSpotify
