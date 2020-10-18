import React from 'react'
import { Stack } from '@fluentui/react'
import useAritsts from '../hooks/useArtists'
import GeneralCard from './GeneralCard'

const LibraryArtists = () => {
  const artists = useAritsts()
  return (
    <Stack
      horizontal
      wrap
      verticalAlign="stretch"
      tokens={{
        childrenGap: 10,
      }}
    >
      {artists.map((p) => (
        <GeneralCard
          id={p.id}
          key={p.id}
          name={p.name}
          // meta={p.description}
          image={p.images[0].url}
        />
      ))}
    </Stack>
  )
}

export default LibraryArtists
