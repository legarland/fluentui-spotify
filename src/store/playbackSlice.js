import { createSlice } from '@reduxjs/toolkit'

const playbackSlice = createSlice({
  name: 'playback',
  initialState: {
    track: {
      id: null,
      name: '',
      duration: 0,
      artist: '',
      album: '',
      artwork: '',
    },
    lastTrack: null,
    timestamp: 0,
    isPlaying: false,
  },
  reducers: {
    setTrack: (state, { payload }) => {
      state.track = payload
    },
    setLastTrack: (state, { payload }) => {
      state.lastTrack = payload
    },
    setTimestamp: (state, { payload }) => {
      state.timestamp = payload
    },
    setIsPlaying: (state, { payload }) => {
      state.isPlaying = payload
    },
  },
})

export const { reducer } = playbackSlice
export const {
  setTrack,
  setLastTrack,
  setTimestamp,
  setIsPlaying,
} = playbackSlice.actions
