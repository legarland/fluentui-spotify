import { IconButton, Stack } from '@fluentui/react'
import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PlaybackSlider from './PlaybackSlider'
import PlayButton from './PlayButton'
import useSpotify from '../hooks/useSpotify'
import useInterval from '../hooks/useInterval'
import { setIsPlaying, setTimestamp, setTrack } from '../store/playbackSlice'

const PlaybackControls = () => {
  const dispatch = useDispatch()
  const timestamp = useSelector((state) => state.playback.timestamp)
  const isPlaying = useSelector((state) => state.playback.isPlaying)
  const track = useSelector((state) => state.playback.track)
  const spotify = useSpotify()

  const load = useCallback(async () => {
    if (spotify) {
      const result = await spotify.getMyCurrentPlaybackState()
      dispatch(setIsPlaying(result.is_playing))
      if (result.is_playing) {
        dispatch(setTimestamp(result.progress_ms / 1000))
        dispatch(
          setTrack({
            id: result.item.id,
            name: result.item.name,
            duration: result.item.duration_ms / 1000,
            artist: result.item.artists[0].name,
            album: result.item.album.name,
            artwork: result.item.album.images
              ? result.item.album.images[0].url
              : '',
          })
        )
      }
    }
  }, [dispatch, spotify])

  useEffect(() => {
    if (spotify) load()
  }, [spotify, load])

  useInterval(900, () => {
    if (isPlaying) load()
  })

  useInterval(3000, () => {
    if (!isPlaying) load()
  })

  return (
    <Stack
      horizontalAlign="stretch"
      tokens={{
        childrenGap: '5px',
      }}
      styles={{
        root: {
          minWidth: 400,
        },
      }}
    >
      <Stack.Item>
        <Stack
          horizontal
          horizontalAlign="center"
          tokens={{
            childrenGap: '20px',
          }}
        >
          <IconButton
            iconProps={{
              iconName: 'PlayReverseResume',
            }}
            onClick={() => spotify.skipToPrevious()}
          />
          <PlayButton trackId={track.id} size="medium" />
          <IconButton
            iconProps={{
              iconName: 'PlayResume',
            }}
            onClick={() => spotify.skipToNext()}
          />
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <PlaybackSlider totalTime={track.duration} timestamp={timestamp} />
      </Stack.Item>
    </Stack>
  )
}

export default PlaybackControls
