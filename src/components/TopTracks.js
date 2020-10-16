import React from 'react'
import { useTrack, UserTop } from 'react-spotify-api'

const TopTracks = () => (
  <UserTop type="tracks">
    {({ data, loading, error }) =>
      data ? (
        <div>
          {data.items.map((item) => (
            <div />
          ))}
        </div>
      ) : null
    }
  </UserTop>
)

export default TopTracks
