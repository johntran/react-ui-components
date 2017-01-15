import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';

import { font, backgroundGrey } from '../../global/consts';

const styles = {
  rowTitle: {
    fontWeight: 'bold',
    font,
  },
  rowContainer: {
    maxWidth: '800px',
    background: backgroundGrey,
    padding: '36px 0',
  },
}

const UserProfileInputRow = ({
  title,
  children,
  labelStyle,
  sheet: {
    classes: {
      rowTitle,
      rowContainer,
    }
  },
}) => (
  <Flex className={rowContainer} justify='center'>
    <Box className={rowTitle} col={3} style={labelStyle}>
      {title}
    </Box>
    <Box col={6}>
      {children}
    </Box>
  </Flex>
)

UserProfileInputRow.propTypes = {
  children: PropTypes.element.isRequired,
  labelStyle: PropTypes.object,
}

UserProfileInputRow.defaultProps = {
  title: 'PLEASE ENTER A TITLE',
}

export default injectSheet(styles)(UserProfileInputRow)
