import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import { SpotifyApiContext, SpotifyApiAxiosContext } from 'react-spotify-api'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie'
import { BrowserRouter as Router } from 'react-router-dom'
import WebPlayer from './components/WebPlayer'
import Layout from './components/Layout'
import { store } from './store/store'

const FluentLogo = styled.h1`
  font-size: 50px;
  color: rgb(255, 255, 255);
  line-height: 1.1;
  margin: 0px;
  white-space: nowrap;
  margin-bottom: 40px;
`

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LogoContainer = styled.div`
  /* padding: 0 0 0.5rem 0; */
  text-align: center;
`

function Application() {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState()

  const instance = axios.create()
  instance.interceptors.response.use(undefined, (err) => {
    if (err.message.indexOf('401') !== -1) {
      alert('removed')
      Cookies.remove('spotifyAuthToken')
      setSpotifyAuthToken(null)
    }
    throw err
  })

  useEffect(() => {
    setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
      <Router>
        {spotifyAuthToken ? (
          <SpotifyApiAxiosContext.Provider value={instance}>
            <SpotifyApiContext.Provider value={spotifyAuthToken}>
              <Provider store={store}>
                <WebPlayer />
              </Provider>
            </SpotifyApiContext.Provider>
          </SpotifyApiAxiosContext.Provider>
        ) : (
          // Display the login page
          <LoginContainer>
            <LogoContainer>
              <svg
                viewBox="0 0 1134 340"
                style={{
                  width: 205,
                }}
              >
                <title>Spotify</title>
                <path
                  fill="#ffffff"
                  d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                />
              </svg>
            </LogoContainer>
            <FluentLogo>
              Fluent
              <svg
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="5" y="39" fill="url(#paint0_linear)">
                  UI
                </text>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-10"
                    y1="-43"
                    x2="129.319"
                    y2="-32.448"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FE5FF" />
                    <stop offset="1" stopColor="#69E56E" />
                  </linearGradient>
                </defs>
              </svg>
            </FluentLogo>
            <SpotifyAuth
              btnClassName="spotify-button"
              logoClassName="spotify-logo"
              redirectUri="http://localhost:3000"
              clientID="631bcd897d95417796a52eeb8003e432"
              scopes={[
                Scopes.userReadPrivate,
                Scopes.userReadRecentlyPlayed,
                Scopes.userLibraryRead,
                Scopes.userTopRead,
                Scopes.userReadCurrentlyPlaying,
                Scopes.userModifyPlaybackState,
                Scopes.userReadPlaybackPosition,
                Scopes.userReadPlaybackState,
                Scopes.playlistReadCollaborative,
                Scopes.playlistReadPrivate,
              ]} // either style will work
            />
          </LoginContainer>
        )}
      </Router>
    </Layout>
  )
}

export default Application
