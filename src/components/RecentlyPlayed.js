import React, { useEffect, useState } from 'react'
import { Stack } from '@fluentui/react'
import useSpotify from '../hooks/useSpotify'
import TrackCard from './TrackCard'

const RecentlyPlayed = () => {
  const [tracks, setTracks] = useState([])
  const spotify = useSpotify()

  useEffect(() => {
    const load = async () => {
      const result = await spotify.getMyRecentlyPlayedTracks()
      setTracks(
        result.items
          .filter(
            (item, index, self) =>
              self.findIndex((t) => t.track.id === item.track.id) === index
          )
          .slice(0, 5)
      )
    }
    if (spotify) load()
  }, [spotify])

  return tracks.length ? (
    <div>
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
        <h2>Recently Played</h2>
        <h4>SEE ALL</h4>
      </Stack>
      <Stack
        horizontal
        horizontalAlign="space-between"
        verticalAlign="stretch"
        tokens={{
          childrenGap: '20px',
        }}
        styles={{
          root: {
            overflow: 'hidden',
          },
        }}
      >
        {tracks.map((item) => (
          <TrackCard id={item.track.id} key={item.track.id} />
        ))}
      </Stack>
    </div>
  ) : null
}

export default RecentlyPlayed
