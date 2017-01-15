import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TextField from 'material-ui/TextField';
import {muiTheme} from 'storybook-addon-material-ui';

import Welcome from './Welcome';
import UserProfileInputRow from '../pages/UserProfile/UserProfileInputRow';
import UserProfileInputProfileDescription from '../pages/UserProfile/UserProfileInput.ProfileDescription';
import UserProfileInputProfilePicture from '../pages/UserProfile/UserProfileInput.ProfilePicture';
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('User Profile', module)
  .addDecorator(muiTheme())
  .add('Profile Description', () => (
    <UserProfileInputProfileDescription/>
  ))
  .add('Picture Profile: empty', () => (
    <UserProfileInputProfilePicture/>
  ))


// storiesOf('')
