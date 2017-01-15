import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import UserProfileInputRow from './UserProfileInputRow';
import { rmbPink } from '../../global/consts';

const labelStyle = {
  margin: '12px 0 0 0',
}
const textFieldStyle = {
  underlineFocusStyle: {
    borderColor: rmbPink,
  },
  underlineStyle: {
    borderColor: '#000'
  },
  floatingLabelStyle: {
    color: rmbPink,
  },
}

const UserProfileInputProfileDescription = () => (
  <UserProfileInputRow
    {
      ...{
        labelStyle,
      }
    }
    title='Description'
    >
    <TextField
      id={'UserProfileInput.ProfileDescription'}
      multiLine={true}
      rows={2}
      fullWidth
      {
        ...textFieldStyle
      }
    />
  </UserProfileInputRow>
)

export default UserProfileInputProfileDescription;
