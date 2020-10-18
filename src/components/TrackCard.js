import React, { useEffect, useState } from 'react'
// import { Image, Stack, Text } from '@fluentui/react'
// import { Card } from '@uifabric/react-cards'
// import { useSelector } from 'react-redux'
import useSpotify from '../hooks/useSpotify'
// import { myTheme } from '../lib/theme'
// import PlayButton from './PlayButton'
import GeneralCard from './GeneralCard'

const TrackCard = ({ id }) => {
  const [data, setData] = useState()
  // const currentTrack = useSelector((state) => state.playback.track)
  // const isPlaying = useSelector((state) => state.playback.isPlaying)
  const spotify = useSpotify()
  useEffect(() => {
    if (spotify) spotify.getTrack(id).then((d) => setData(d))
  }, [id, spotify])

  return data ? (
    <GeneralCard
      name={data.name}
      id={data.id}
      location={`album/${data.album.id}/track`}
      meta={data.artists[0].name}
      image={data.album.images[0].url}
    />
  ) : null
}

export default TrackCard
