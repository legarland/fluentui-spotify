import React from 'react'
import { UserTracks } from 'react-spotify-api'
import usePageTitle from '../hooks/usePageTitle'
import TrackList from './TrackList'

const LikedSongs = () => {
  usePageTitle('Liked Songs')
  return (
    <UserTracks>
      {({ data }) => {
        console.log(data)
        return data ? (
          <TrackList
            tracks={data.items.map((i) => ({
              title: i.track.name,
              artist: i.track.artists[0].name,
              album: i.track.album.name,
              duration: i.track.duration_ms,
              imageUrl: i.track.album.images[0].url,
              addedAt: i.added_at,
            }))}
          />
        ) : null
      }}
    </UserTracks>
  )
}

export default LikedSongs
