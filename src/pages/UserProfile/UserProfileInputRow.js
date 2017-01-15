import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import { Flex, Box } from 'reflexbox';

import { font, backgroundGrey } from '../../global/consts';

const styles = {
  rowTitle: {
    fontWeight: 'bold',
    font,
    width: '30%',
    padding: '0 50px',
  },
  rowContent: {
    width: '50%',
  },
  rowContainer: {
    maxWidth: '800px',
    background: backgroundGrey,
    padding: '36px 0',
  },
};

const UserProfileInputRow = ({
  title,
  children,
  labelStyle,
  sheet: {
    classes: {
      rowTitle,
      rowContainer,
      rowContent,
    },
  },
}) => (
  <Flex className={rowContainer}>
    <Box
      className={rowTitle}
      style={labelStyle}>
      {title}
    </Box>
    <Box className={rowContent}>
      {children}
    </Box>
  </Flex>
);

UserProfileInputRow.propTypes = {
  children: PropTypes.element.isRequired,
  labelStyle: PropTypes.object,
  title: PropTypes.string,
  sheet: PropTypes.object,
};

UserProfileInputRow.defaultProps = {
  title: 'PLEASE ENTER A TITLE',
  labelStyle: null,
  sheet: {},
};

export default injectSheet(styles)(UserProfileInputRow);
