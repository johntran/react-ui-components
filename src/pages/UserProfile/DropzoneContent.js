import React, { Component, PropTypes } from 'react'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import Dropzone from 'react-dropzone';
import { font, backgroundGrey } from '../../global/consts';

const styles = {
  emptyContent: {
    height: '100%',
    margin: 'auto',
    font,
    cursor: 'pointer',
  },
  emptyContentText: {
    width: '80%',
    margin: '5px 0',
  },
  imageContent: {
    maxWidth: '200px',
    maxHeight: '200px',
    cursor: 'pointer',
  },
}

const textColumn = [
  ' To upload a profile picture:',
  ' - Click anywhere',
  ' - Drag a picture inside here'
]

const DropzoneContent = ({
  pictureUrl,
  sheet: {
    classes: {
      emptyContent,
      emptyContentText,
      imageContent,
    }
  }
}) => {
  if (!pictureUrl) {
    return (
      <Flex
        align='center'
        justify='center'
        flexColumn
        className={emptyContent}>
          {textColumn.map(text => (
            <div
              key={text}
              className={emptyContentText}>
                {text}
            </div>
          ))}
      </Flex>
    )
  }
  return (
    <img src={pictureUrl} className={imageContent} />
  )
}

export default injectSheet(styles)(DropzoneContent)
