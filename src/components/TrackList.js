/* eslint-disable react/display-name */
import {
  DetailsList,
  IconButton,
  Image,
  mergeStyleSets,
  SelectionMode,
  Stack,
  Text,
} from '@fluentui/react'
import moment from 'moment'
import React from 'react'
import { millisToMinutesAndSeconds } from '../lib/time'
import PlayButton from './PlayButton'

const classNames = mergeStyleSets({
  playCell: {
    display: 'flex !important',
    alignItems: 'center',
  },
})

const TrackList = ({ tracks }) => {
  const columns = [
    {
      key: 'column1',
      name: '',
      className: classNames.playCell,
      minWidth: 25,
      maxWidth: 25,
      // onColumnClick: this._onColumnClick,
      onRender: (item) => <PlayButton size="medium" trackId={item.id} />,
    },
    {
      key: 'column2',
      name: 'Title',
      minWidth: 300,
      // onColumnClick: this._onColumnClick,
      onRender: (item) => (
        <Stack
          horizontal
          tokens={{
            childrenGap: 10,
          }}
        >
          <Stack.Item shrink={false}>
            <Image src={item.imageUrl} width={45} height={45} />
          </Stack.Item>
          <Stack
            verticalAlign="center"
            tokens={{
              childrenGap: 1,
            }}
          >
            <Text nowrap>
              <b>{item.title}</b>
            </Text>
            <Text>{item.artist}</Text>
          </Stack>
        </Stack>
      ),
    },
    {
      key: 'album',
      fieldName: 'album',
      name: 'Album',
      minWidth: 200,
      maxWidth: 250,
      className: classNames.playCell,
      onRender: (item) => (
        <Text variant="medium" nowrap>
          {item.album}
        </Text>
      ),
    },
    {
      key: 'added',
      fieldName: 'addedAt',
      name: 'Date Added',
      className: classNames.playCell,
      isCollapsible: true,
      data: 'date',
      onRender: (item) => (
        <Text nowrap>{moment(item.addedAt).format('MMM D, YYYY')}</Text>
      ),
    },
    {
      key: 'liked',
      className: classNames.playCell,
      maxWidth: 20,
      minWidth: 20,
      onRender: () => (
        <IconButton
          iconProps={{
            iconName: 'Heart',
            // styles: {
            //   root: {
            //     fontSize: '25px',
            //   },
            // },
          }}
        />
      ),
    },
    {
      key: 'length',
      fieldName: 'length',
      iconName: 'Clock',
      className: classNames.playCell,
      onRender: (item) => (
        <Text>{millisToMinutesAndSeconds(item.duration)}</Text>
      ),
    },
  ]
  return (
    <DetailsList
      columns={columns}
      items={tracks}
      selectionMode={SelectionMode.none}
      justified
    />
  )
}

export default TrackList
