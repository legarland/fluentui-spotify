/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useRef } from 'react'
import { useUser } from 'react-spotify-api'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import {
  Persona,
  PersonaSize,
  PersonaPresence,
  ContextualMenu,
  ContextualMenuItemType,
  DirectionalHint,
  DefaultPalette,
} from '@fluentui/react'
import Cookies from 'js-cookie'

const Account = () => {
  const persona = useRef(null)
  const { data, loading } = useUser()
  const [showMenu, setShowMenu] = useState(false)
  const onShowContextualMenu = useCallback((ev) => {
    ev.preventDefault() // don't navigate
    setShowMenu(true)
  }, [])
  const onHideContextualMenu = useCallback(() => setShowMenu(false), [])

  if (loading) return <div>Loading...</div>
  return data ? (
    <div>
      <a href="#" ref={persona} onClick={onShowContextualMenu}>
        <Persona
          imageUrl={data.images[0].url}
          text={data.display_name}
          size={PersonaSize.size24}
          presence={PersonaPresence.online}
          imageAlt={`${data.name} Account`}
        />
      </a>
      <ContextualMenu
        directionalHint={DirectionalHint.bottomRightEdge}
        ali
        styles={{
          root: {
            backgroundColor: DefaultPalette.neutralPrimary,
          },
        }}
        items={[
          {
            key: 'account',
            text: 'Account',
            onClick: () => console.log('Rename clicked'),
          },
          {
            key: 'profile',
            text: 'Profile',
            onClick: () => console.log('Edit clicked'),
          },
          {
            key: 'divider_1',
            itemType: ContextualMenuItemType.Divider,
          },

          {
            key: 'logout',
            text: 'Logout',
            onClick: () => {
              Cookies.remove('spotifyAuthToken')
            },
          },
        ]}
        hidden={!showMenu}
        target={persona}
        onItemClick={onHideContextualMenu}
        onDismiss={onHideContextualMenu}
      />
    </div>
  ) : null
}

export default Account
