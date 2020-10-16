import { configureStore } from '@reduxjs/toolkit'
import { reducer as playbackReducer } from './playbackSlice'
import { reducer as pageReducer } from './pageSlice'

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
    page: pageReducer,
  },
})
