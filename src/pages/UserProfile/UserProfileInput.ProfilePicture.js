import React, { Component, PropTypes } from 'react'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';

import UserProfileInputRow from './UserProfileInputRow';
import PictureUploader from './PictureUploader';
import { rmbPink } from '../../global/consts';

const labelStyle = {
  margin: '12px 0 0 0',
}
const textFieldStyle = {
  underlineFocusStyle: {
    borderColor: rmbPink,
  },
  floatingLabelStyle: {
    color: rmbPink,
  },
}

const UserProfileInputProfilePicture = ({ pictureUrl }) => (
  <UserProfileInputRow {
      ...{
        labelStyle,
      }
    }
    title='Update Profile Picture'>
      <PictureUploader {
        ...{
          pictureUrl,
        }
      }/>
  </UserProfileInputRow>
)

export default UserProfileInputProfilePicture;
