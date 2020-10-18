import { useState, useEffect } from 'react'
import useSpotify from './useSpotify'

const useAlbums = () => {
  const spotify = useSpotify()
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const load = async () => {
      if (spotify) {
        const result = await spotify.getMySavedAlbums()
        setAlbums(result.items)
      }
    }
    load()
  }, [spotify])

  return albums
}

export default useAlbums
