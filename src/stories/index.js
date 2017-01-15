import React from 'react';
import {
  storiesOf,
  // action,
  linkTo,
} from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';

import Welcome from './Welcome';
import UserProfilePage from '../pages/UserProfile/UserProfilePage';
import UserProfileInputProfileDescription from '../pages/UserProfile/UserProfileInput.ProfileDescription';
import UserProfileInputProfilePicture from '../pages/UserProfile/UserProfileInput.ProfilePicture';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('User Profile', module)
  .addDecorator(muiTheme())
  .add('User Profile Page', () => (
    <UserProfilePage />
  ))
  .add('Profile Description', () => (
    <UserProfileInputProfileDescription />
  ))
  .add('Picture Profile: empty', () => (
    <UserProfileInputProfilePicture />
  ))
  .add('Profile Picture: has picture', () => (
    <UserProfileInputProfilePicture
      pictureUrl={'http://runmyrobot.com/images/thumbnails/11467183.jpg'}
    />
  ));


// storiesOf('')
