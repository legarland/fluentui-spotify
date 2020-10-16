import React from 'react'
import { Slider } from '@fluentui/react'
import { secondsToMinutesAndSeconds } from '../lib/time'

const PlaybackSlider = ({ totalTime = 0, timestamp = 0 }) => (
  <Slider
    max={totalTime}
    showValue
    value={timestamp}
    valueFormat={(value) =>
      `${secondsToMinutesAndSeconds(value)} - ${secondsToMinutesAndSeconds(
        totalTime
      )}`
    }
  />
)

export default PlaybackSlider
