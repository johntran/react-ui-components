import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import { Flex, Box } from 'reflexbox';
import UserProfileInputProfileDescription from './UserProfileInput.ProfileDescription';
import UserProfileInputProfilePicture from './UserProfileInput.ProfilePicture';

import { font, backgroundGrey } from '../../global/consts';

const spacing = {
  // width: '30%',
  padding: '0 50px',
}

const styles = {
  global: {
    font,
    maxWidth: '800px',
  },
  headerContainer: {
    padding: '36px 0',
    background: '#DFDFDF',
  },
  header: {
    fontWeight: '500',
    fontSize: '20px',
    ...spacing,
  },
  subtext: {
    fontWeight: '400',
    fontSize: '16px',
    ...spacing,
  }
}

const UserProfilePage = ({
  sheet: {
    classes: {
      header,
      global,
      subtext,
      headerContainer,
    }
  }
}) => (
  <Flex flexColumn className={global}>
    <Flex flexColumn className={headerContainer}>
      <Box className={header}>
        Profile Settings
      </Box>
      <Box className={subtext}>
        Update your description and profile picture
      </Box>
    </Flex>
    <UserProfileInputProfileDescription/>
    <UserProfileInputProfilePicture/>
  </Flex>
)

export default injectSheet(styles)(UserProfilePage);
