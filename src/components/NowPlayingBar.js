import React from 'react'
import styled from 'styled-components'
import NowPlaying from './NowPlaying'
import PlaybackControls from './PlaybackControls'

const Container = styled.div`
  grid-area: now-playing-bar;
  background-color: #181818;
  width: 100%;
  z-index: 4;
`
const InnerContainer = styled.div`
  min-width: 620px;
  background-color: #282828;
  border-top: 1px solid #000;
`
const Bar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`

const NowPlayingBar = () => (
  <Container>
    <InnerContainer>
      <Bar>
        <NowPlaying />
        <PlaybackControls />
        <div>Other Controls</div>
      </Bar>
    </InnerContainer>
  </Container>
)

export default NowPlayingBar
