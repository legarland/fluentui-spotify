import React from 'react'
import { loadTheme, Fabric } from '@fluentui/react'
import { myTheme } from '../lib/theme'

const Layout = ({ children }) => {
  loadTheme(myTheme)
  return (
    <Fabric applyThemeToBody theme={myTheme}>
      {children}
    </Fabric>
  )
}

export default Layout
