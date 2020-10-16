export const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  // ES6 interpolated literals/template literals
  // If seconds is less than 10 put a zero in front.
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export const secondsToMinutesAndSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const secs = (seconds % 60).toFixed(0)
  // ES6 interpolated literals/template literals
  // If seconds is less than 10 put a zero in front.
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
}
