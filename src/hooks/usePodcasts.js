import { useState, useEffect } from 'react'
import useSpotify from './useSpotify'

const usePodcasts = () => {
  const spotify = useSpotify()
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const load = async () => {
      if (spotify) {
        const result = await spotify.getMySavedShows()
        setPodcasts(result.items)
      }
    }
    load()
  }, [spotify])

  return podcasts
}

export default usePodcasts
