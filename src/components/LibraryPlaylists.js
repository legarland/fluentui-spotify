import { Stack } from '@fluentui/react'
import React from 'react'
import usePlaylists from '../hooks/usePlaylists'
import GenralCard from './GeneralCard'

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
        <GenralCard
          id={p.id}
          key={p.id}
          name={p.name}
          meta={p.description || 'By You'}
          image={p.images[0].url}
        />
      ))}
    </Stack>
  )
}

export default LibraryPlaylists
