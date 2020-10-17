import React from 'react'
import { Pivot, PivotItem } from '@fluentui/react'
import styled from 'styled-components'
import LibraryPlaylists from './LibraryPlaylists'
import usePageTitle from '../hooks/usePageTitle'

const TopMargin = styled.div`
  margin-top: 10px;
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
        <PivotItem headerText="Podcasts" />
        <PivotItem headerText="Artists" />
        <PivotItem headerText="Albums" />
      </Pivot>
    </div>
  )
}

export default Library
