import { useState, useEffect } from 'react'
import useSpotify from './useSpotify'

const useSearch = (keyword) => {
  const spotify = useSpotify()
  const [search, setSearch] = useState({
    searched: false,
    results: {},
  })

  useEffect(() => {
    const load = async () => {
      if (spotify) {
        const results = await spotify.search(keyword, [
          'album',
          'artist',
          'playlist',
          'track',
        ])
        setSearch({
          searched: true,
          data: results,
          totalResults:
            results.albums.total +
            results.tracks.total +
            results.playlists.total +
            results.tracks.total,
        })
      }
    }
    if (keyword) load()
    else {
      setSearch({
        searched: false,
        results: {},
      })
    }
  }, [spotify, keyword])

  return search
}

export default useSearch
