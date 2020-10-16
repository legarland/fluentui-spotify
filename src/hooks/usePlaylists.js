import { useState, useEffect } from 'react'
import useSpotify from './useSpotify'

const usePlaylists = () => {
  const spotify = useSpotify()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const load = async () => {
      if (spotify) {
        const result = await spotify.getUserPlaylists()
        setPlaylists(result.items)
      }
    }
    load()
  }, [spotify])

  return playlists
}

export default usePlaylists
