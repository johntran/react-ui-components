import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import { Flex } from 'reflexbox';
import Dropzone from 'react-dropzone';
import DropzoneContent from './DropzoneContent';
import { font } from '../../global/consts';

const styles = {
  hasImage: {
    borderStyle: 'none',
  },
  uploadAnother: {
    font,
    maxWidth: '200px',
  },
};

const emptyString = '';

class PictureUploader extends Component {
  static propTypes = {
    pictureUrl: PropTypes.string,
    sheet: PropTypes.object,
  }
  static defaultProps = {
    pictureUrl: '',
  }
  state = {
    uploadedImage: null,
    image: null,
  }
  onDrop = (files) => {
    const uploadedImage = files[0];
    this.setState({ uploadedImage });
    this.successfulUpload(uploadedImage);
  }
  successfulUpload = image => this.setState({ image })
  render() {
    const {
      sheet: {
        classes: {
          hasImage,
          uploadAnother,
        },
      },
    } = this.props;
    const { image } = this.state;
    const pictureUrl = image ? image.preview : this.props.pictureUrl;
    return (
      <Flex flexColumn>
        <Dropzone
          className={pictureUrl ? hasImage : emptyString}
          onDrop={this.onDrop}>
          <DropzoneContent {
            ...{
              pictureUrl,
            }
          }/>
        </Dropzone>
        { pictureUrl ?
          <Flex
            className={uploadAnother}
            flexColumn>
            Click your profile picture to upload a different photo
          </Flex>
          : null
        }
      </Flex>
    );
  }
}

export default injectSheet(styles)(PictureUploader);
