import { useState, useEffect } from 'react'
import useSpotify from './useSpotify'

const usePlaylist = (id) => {
  const spotify = useSpotify()
  const [playlist, setPlaylist] = useState()

  useEffect(() => {
    const load = async () => {
      if (spotify) {
        const result = await spotify.getPlaylist(id)
        setPlaylist(result)
      }
    }
    load()
  }, [spotify, id])

  return playlist
}

export default usePlaylist
