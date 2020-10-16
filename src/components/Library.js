import React from 'react'
import { Pivot, PivotItem } from '@fluentui/react'
import LibraryPlaylists from './LibraryPlaylists'
import usePageTitle from '../hooks/usePageTitle'

const Library = () => {
  usePageTitle('Your Library')
  return (
    <div>
      <Pivot>
        <PivotItem headerText="Playlists">
          <LibraryPlaylists />
        </PivotItem>
        <PivotItem headerText="Podcasts" />
        <PivotItem headerText="Artists" />
        <PivotItem headerText="Albums" />
      </Pivot>
    </div>
  )
}

export default Library
