import { useState, useEffect } from 'react'
import useSpotify from './useSpotify'

const useArtists = () => {
  const spotify = useSpotify()
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const load = async () => {
      if (spotify) {
        const result = await spotify.getMyTopArtists()
        setArtists(result.items)
      }
    }
    load()
  }, [spotify])

  return artists
}

export default useArtists
