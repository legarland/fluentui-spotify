import { Stack } from '@fluentui/react'
import React from 'react'
import usePlaylists from '../hooks/usePlaylists'
import PlaylistCard from './PlaylistCard'

const LibraryPlaylists = () => {
  const playlists = usePlaylists()
  return (
    <Stack
      horizontal
      wrap
      verticalAlign="stretch"
      tokens={{
        childrenGap: 10,
      }}
    >
      {playlists.map((p) => (
        <PlaylistCard
          id={p.id}
          key={p.id}
          name={p.name}
          description={p.description}
          image={p.images[0].url}
        />
      ))}
    </Stack>
  )
}

export default LibraryPlaylists
