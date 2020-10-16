import React from 'react'
import { useParams } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import usePlaylist from '../hooks/usePlaylist'
import TrackList from './TrackList'

const Playlist = ({ playlistId }) => {
  const { id } = useParams()
  const playlist = usePlaylist(id || playlistId)
  usePageTitle(playlist ? playlist.name : '')

  return playlist ? (
    <div>
      <TrackList
        tracks={playlist.tracks.items.map((i) => ({
          title: i.track.name,
          artist: i.track.artists[0].name,
          album: i.track.album.name,
          duration: i.track.duration_ms,
          imageUrl: i.track.album.images[0].url,
          addedAt: i.added_at,
        }))}
      />
    </div>
  ) : (
    <div>nothing</div>
  )
}

export default Playlist
