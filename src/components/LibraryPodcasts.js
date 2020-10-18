import React from 'react'
import { Stack } from '@fluentui/react'
import usePodcasts from '../hooks/usePodcasts'
import GeneralCard from './GeneralCard'

const LibraryPodcasts = () => {
  const podcasts = usePodcasts()
  return (
    <Stack
      horizontal
      wrap
      verticalAlign="stretch"
      tokens={{
        childrenGap: 10,
      }}
    >
      {podcasts.map((p) => (
        <GeneralCard
          id={p.show.id}
          key={p.show.id}
          name={p.show.name}
          meta={p.show.publisher}
          image={p.show.images[0].url}
        />
      ))}
    </Stack>
  )
}

export default LibraryPodcasts
