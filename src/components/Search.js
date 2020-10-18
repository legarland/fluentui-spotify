import React, { useState, useCallback } from 'react'
import { SearchBox, Stack } from '@fluentui/react'
import debounce from 'lodash/debounce'
import GeneralCard from './GeneralCard'
import useSearch from '../hooks/useSearch'
import usePageTitle from '../hooks/usePageTitle'

const Search = () => {
  usePageTitle('Search')
  const [searchText, setSearchText] = useState()
  const delayedQuery = useCallback(
    debounce((text) => setSearchText(text), 500),
    []
  )
  const results = useSearch(searchText, {
    album: true,
    track: true,
  })
  return (
    <div>
      <SearchBox
        placeholder="Search for Artists, Songs, Playlists or Podcasts"
        onSearch={(evt) => setSearchText(evt)}
        onChange={(evt) => delayedQuery(evt.target.value)}
        onClear={() => setSearchText('')}
        autoComplete="off"
      />
      {results.searched && results.totalResults === 0 && <div>No Results</div>}
      {results.searched ? (
        <div style={{ marginBottom: 15 }}>
          {/* Tracks */}
          <div>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
            >
              <h2>Tracks</h2>
              <h4>SEE ALL</h4>
            </Stack>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="stretch"
              tokens={{
                childrenGap: '20px',
              }}
              styles={{
                root: {
                  overflow: 'hidden',
                },
              }}
            >
              {results.data.tracks.items.map((item) => (
                <GeneralCard
                  name={item.name}
                  meta={item.artists[0].name}
                  id={item.id}
                  image={item.album.images[0].url}
                  type="tracks"
                />
              ))}
            </Stack>
          </div>
          {/* Albums */}
          <div>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
            >
              <h2>Albums</h2>
              <h4>SEE ALL</h4>
            </Stack>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="stretch"
              tokens={{
                childrenGap: '20px',
              }}
              styles={{
                root: {
                  overflow: 'hidden',
                },
              }}
            >
              {results.data.albums.items.map((item) => (
                <GeneralCard
                  name={item.name}
                  meta={item.artists[0].name}
                  id={item.id}
                  image={item.images[0].url}
                  type="albums"
                />
              ))}
            </Stack>
          </div>

          {/* Playlists */}
          <div>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
            >
              <h2>Playlists</h2>
              <h4>SEE ALL</h4>
            </Stack>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="stretch"
              tokens={{
                childrenGap: '20px',
              }}
              styles={{
                root: {
                  overflow: 'hidden',
                },
              }}
            >
              {results.data.playlists.items.map((item) => (
                <GeneralCard
                  name={item.name}
                  meta={item.description}
                  id={item.id}
                  image={item.images[0].url}
                  type="albums"
                />
              ))}
            </Stack>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Search
