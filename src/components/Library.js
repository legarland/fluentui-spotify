import React from 'react'
import { Pivot, PivotItem } from '@fluentui/react'
import styled from 'styled-components'
import LibraryPlaylists from './LibraryPlaylists'
import usePageTitle from '../hooks/usePageTitle'
import LibraryPodcasts from './LibraryPodcasts'
import LibraryArtists from './LibraryArtists'
import LibraryAlbums from './LibraryAlbums'

const TopMargin = styled.div`
  margin-top: 15px;
`

const Library = () => {
  usePageTitle('Your Library')
  return (
    <div>
      <Pivot>
        <PivotItem headerText="Playlists">
          <TopMargin>
            <LibraryPlaylists />
          </TopMargin>
        </PivotItem>
        <PivotItem headerText="Podcasts">
          <TopMargin>
            <LibraryPodcasts />
          </TopMargin>
        </PivotItem>
        <PivotItem headerText="Artists">
          <TopMargin>
            <LibraryArtists />
          </TopMargin>
        </PivotItem>
        <PivotItem headerText="Albums">
          <TopMargin>
            <LibraryAlbums />
          </TopMargin>
        </PivotItem>
      </Pivot>
    </div>
  )
}

export default Library
