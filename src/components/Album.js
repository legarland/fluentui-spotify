import React from 'react'
import { useParams } from 'react-router-dom'

const Album = () => {
  const { trackId, albumId } = useParams()

  return (
    <div>
      {trackId} - {albumId}
    </div>
  )
}

export default Album
