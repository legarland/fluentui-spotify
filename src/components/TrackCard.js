import React, { useEffect, useState } from 'react'
import { Image, Stack, Text } from '@fluentui/react'
import { Card } from '@uifabric/react-cards'
import { useSelector } from 'react-redux'
import useSpotify from '../hooks/useSpotify'
import { myTheme } from '../lib/theme'
import PlayButton from './PlayButton'

const TrackCard = ({ id }) => {
  const [data, setData] = useState()
  const currentTrack = useSelector((state) => state.playback.track)
  const isPlaying = useSelector((state) => state.playback.isPlaying)
  const spotify = useSpotify()
  useEffect(() => {
    if (spotify) spotify.getTrack(id).then((d) => setData(d))
  }, [id, spotify])

  return data ? (
    <Card
      styles={{
        root: {
          backgroundColor:
            currentTrack.id === data.id && isPlaying ? '#333' : '#161616',
          paddingTop: '2rem',
          paddingBottom: '1rem',
          boxShadow: myTheme.effects.elevation64,
        },
      }}
    >
      <Card.Item>
        <Stack horizontalAlign="center" grow={false}>
          <Image
            src={data.album.images[0].url}
            width="60%"
            height="60%"
            styles={{
              root: {
                borderRadius: '50%',
              },
            }}
          />
        </Stack>
      </Card.Item>
      <Card.Item>
        <Stack
          horizontal
          verticalAlign="center"
          horizontalAlign="center"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 15,
          }}
          tokens={{ childrenGap: '10px' }}
        >
          <PlayButton trackId={data.id} />
          <Text variant="medium">{data.name}</Text>
        </Stack>
      </Card.Item>
    </Card>
  ) : null
}

export default TrackCard
