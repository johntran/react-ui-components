import React, { Component, PropTypes } from 'react'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import Dropzone from 'react-dropzone';
import DropzoneContent from './DropzoneContent'

class PictureUploader extends Component {
  onDrop = () => {}
  render() {
    const { pictureUrl } = this.props;
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <DropzoneContent {
            ...{
              pictureUrl,
            }
          }/>
        </Dropzone>
      </div>
    )
  }
}

export default PictureUploader;
