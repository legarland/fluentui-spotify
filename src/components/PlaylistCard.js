import React from 'react'
import { Image, Stack, Text } from '@fluentui/react'
import { Card } from '@uifabric/react-cards'
import { useHistory } from 'react-router-dom'
import { myTheme } from '../lib/theme'

const PlaylistCard = ({ name, description, image, id }) => {
  const history = useHistory()
  return (
    <Card
      onClick={() => {
        history.push(`/playlist/${id}`)
      }}
      styles={{
        root: {
          maxWidth: 240,
          backgroundColor: '#161616',
          paddingTop: '2rem',
          paddingBottom: '1rem',
          boxShadow: myTheme.effects.elevation64,
        },
      }}
    >
      <Card.Item>
        <Stack horizontalAlign="center" grow={false}>
          <Image src={image} width="80%" height="80%" />
        </Stack>
      </Card.Item>
      <Card.Item>
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
            {description || 'By You'}
          </Text>
        </Stack>
      </Card.Item>
    </Card>
  )
}

export default PlaylistCard
