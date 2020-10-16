import React from 'react'
import { Stack, Text, Image } from '@fluentui/react'
import { useSelector } from 'react-redux'

const NowPlaying = () => {
  const track = useSelector((state) => state.playback.track)
  return track.id ? (
    <Stack
      horizontal
      tokens={{
        childrenGap: 10,
      }}
    >
      <Image src={track.artwork} width={60} height={60} />
      <Stack
        verticalAlign="center"
        tokens={{
          childrenGap: 1,
        }}
      >
        <Text>
          <b>{track.name}</b>
        </Text>
        <Text>{track.artist}</Text>
      </Stack>
    </Stack>
  ) : (
    <div>No Track Playing</div>
  )
}

export default NowPlaying
