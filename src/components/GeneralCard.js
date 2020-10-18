import React from 'react'
import { Image, Stack, Text, ImageFit } from '@fluentui/react'
import { Card } from '@uifabric/react-cards'
import { useHistory } from 'react-router-dom'
import { myTheme } from '../lib/theme'

const PlaylistCard = ({ name, meta, image, id, location = 'playlist' }) => {
  const history = useHistory()
  return (
    <Card
      onClick={() => {
        history.push(`/${location}/${id}`)
      }}
      styles={{
        root: {
          maxWidth: 230,
          backgroundColor: '#161616',
          paddingTop: '2rem',
          paddingBottom: '1rem',
          boxShadow: myTheme.effects.elevation64,
        },
      }}
    >
      <Card.Item>
        <Stack horizontalAlign="center" grow={false}>
          <Image
            src={image}
            height="160px"
            width="160px"
            imageFit={ImageFit.centerCover}
          />
        </Stack>
      </Card.Item>
      <Card.Item
        styles={{
          root: {
            maxWidth: 200,
          },
        }}
      >
        <Stack
          verticalAlign="center"
          horizontalAlign="center"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 15,
          }}
          tokens={{ childrenGap: '5px' }}
        >
          <Text variant="mediumPlus" nowrap style={{ maxWidth: '100%' }}>
            <b>{name}</b>
          </Text>
          <Text variant="medium" nowrap style={{ maxWidth: '100%' }}>
            {meta}
          </Text>
        </Stack>
      </Card.Item>
    </Card>
  )
}

export default PlaylistCard
