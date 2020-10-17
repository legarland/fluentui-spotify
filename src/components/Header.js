import React from 'react'
import { Stack } from '@fluentui/react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Account from './Account'

const PageTitle = styled.h1`
  margin: 0;
`

const StackContainer = styled.div`
  /* padding: 1rem; */
  position: sticky;
  grid-area: main-view;
  z-index: 2;
  height: 60px;
  min-width: 0;
`

const Header = () => {
  const pageTitle = useSelector((store) => store.page.pageTitle)
  return (
    <StackContainer>
      <Stack horizontal horizontalAlign="space-between">
        <PageTitle>{pageTitle}</PageTitle>
        <Account />
      </Stack>
    </StackContainer>
  )
}

export default Header
