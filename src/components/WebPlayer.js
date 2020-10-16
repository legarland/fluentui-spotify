import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import styled from 'styled-components'
import Header from './Header'
import Library from './Library'
import LikedSongs from './LikedSongs'
import NavigationPane from './Nav'
import NowPlayingBar from './NowPlayingBar'
import Playlist from './Playlist'
import Home from './Home'
import Search from './Search'

const ScrollContainer = styled(SimpleBar)`
  grid-area: main-view;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  position: relative;
`

const Grid = styled.div`
  min-height: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'nav-bar main-view buddy-feed'
    'now-playing-bar now-playing-bar now-playing-bar';
`
const WebPlayer = () => (
  <Grid>
    <NavigationPane />
    <ScrollContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/liked">
          <LikedSongs />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/playlist/:id">
          <Playlist />
        </Route>
      </Switch>
    </ScrollContainer>
    <NowPlayingBar />
  </Grid>
)

export default WebPlayer
