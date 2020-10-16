import React from 'react'
import usePageTitle from '../hooks/usePageTitle'
import RecentlyPlayed from './RecentlyPlayed'

const Home = () => {
  usePageTitle('Home')
  return <RecentlyPlayed />
}

export default Home
