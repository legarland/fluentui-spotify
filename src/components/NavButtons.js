import React, { useState } from 'react'
import { Stack, IconButton } from '@fluentui/react'
import { useHistory } from 'react-router-dom'

const NavButtons = () => {
  const [level, setLevel] = useState(0)
  const history = useHistory()

  history.listen((location, action) => {
    if (action === 'PUSH') setLevel(level + 1)
    if (action === 'POP') setLevel(level - 1)
  })

  return (
    <Stack tokens={{ childrenGap: 8 }} horizontal>
      <IconButton
        iconProps={{
          iconName: 'ChevronLeftSmall',
        }}
        title="Back"
        ariaLabel="Back"
        disabled
        onClick={() => history.goBack()}
      />
      <IconButton
        iconProps={{
          iconName: 'ChevronRightSmall',
        }}
        title="Forward"
        ariaLabel="Forward"
        disabled
      />
    </Stack>
  )
}

export default NavButtons
