import React from 'react'
import { IconButton } from '@fluentui/react'
import { useSelector } from 'react-redux'
import { myTheme } from '../lib/theme'
import useSpotify from '../hooks/useSpotify'

const PlayButton = ({ size, trackId }) => {
  const track = useSelector((state) => state.playback.track)
  const isPlaying = useSelector((state) => state.playback.isPlaying)
  const spotify = useSpotify()
  return (
    <IconButton
      onClick={() => {
        if (spotify) {
          if (isPlaying && trackId === track.id) spotify.pause()
          else if (trackId === track.id) spotify.play()
          else spotify.play({ uris: [`spotify:track:${trackId}`] })
        }
      }}
      iconProps={{
        iconName:
          track.id && isPlaying && trackId === track.id ? 'Pause' : 'Play',
        styles: {
          root: {
            fontSize: size === 'medium' ? '20px' : '25px',
            color: '#fff',
            padding: 10,
            background: myTheme.palette.themePrimary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            height: size === 'medium' ? 30 : 40,
            width: size === 'medium' ? 30 : 40,
          },
        },
      }}
    />
  )
}

export default PlayButton
