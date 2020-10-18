import React from 'react'
import { Stack } from '@fluentui/react'
import useAlbums from '../hooks/useAlbums'
import GeneralCard from './GeneralCard'

const LibraryAlbums = () => {
  const albums = useAlbums()
  return (
    <Stack
      horizontal
      wrap
      verticalAlign="stretch"
      tokens={{
        childrenGap: 10,
      }}
    >
      {albums.map((p) => (
        <GeneralCard
          id={p.album.id}
          key={p.album.id}
          name={p.album.name}
          meta={p.album.artists[0].name}
          image={(p.album.images && p.album.images[0].url) || ''}
        />
      ))}
    </Stack>
  )
}

export default LibraryAlbums
