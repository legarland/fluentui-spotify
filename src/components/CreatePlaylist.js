import React, { useEffect, useState } from 'react'
import { useUser } from 'react-spotify-api'
import {
  Dialog,
  TextField,
  PrimaryButton,
  DefaultButton,
  DialogFooter,
} from '@fluentui/react'
import useSpotify from '../hooks/useSpotify'

const CreatePlaylist = ({ show, onDismissed = () => {} }) => {
  const [showDialog, setShowDialog] = useState(show)
  const [name, setName] = useState('')
  const user = useUser()
  const spotify = useSpotify()

  const createPlaylist = async () => {
    if (name) {
      const result = await spotify.createPlaylist(user.data.id, {
        name,
      })
      onDismissed({
        id: result.id,
      })
      setShowDialog(false)
    }
  }

  const dismiss = () => {
    onDismissed()
    setShowDialog(false)
  }

  useEffect(() => {
    setShowDialog(show)
  }, [show])
  return (
    <Dialog
      hidden={!showDialog}
      onDismiss={dismiss}
      dialogContentProps={{
        title: 'Create a Playlist',
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <TextField
        label="Enter a playlist name"
        onChange={(evt) => setName(evt.target.value)}
      />
      <DialogFooter>
        <PrimaryButton onClick={createPlaylist} text="Create" />
        <DefaultButton onClick={dismiss} text="Cancel" />
      </DialogFooter>
    </Dialog>
  )
}

export default CreatePlaylist
