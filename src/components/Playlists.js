import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar/src/simplebar.css'
import styled from 'styled-components'
import usePlaylists from '../hooks/usePlaylists'

const Container = styled.div`
  overflow: hidden;
  flex: 1;
  padding-left: 15px;
  padding-top: 10px;
  margin-top: -30px;
  border-top: solid 1px #191919;
`

const ScrollContainer = styled(SimpleBar)`
  max-height: 100%;
`

const LinkContainer = styled.div`
  margin-bottom: 10px;
`

const PlaylistLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`
const Playlists = () => {
  const playlists = usePlaylists()
  const history = useHistory()
  return (
    <Container>
      <ScrollContainer>
        {playlists.map((playlist) => (
          <LinkContainer>
            <PlaylistLink
              active={history.location.pathname.indexOf(playlist.id) !== -1}
              to={`/playlist/${playlist.id}`}
            >
              {playlist.name}
            </PlaylistLink>
          </LinkContainer>
        ))}
      </ScrollContainer>
    </Container>
  )
}

export default Playlists
