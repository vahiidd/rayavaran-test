import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import React from 'react';
import { ProfileType } from '../../dataTypes';
import Info from './Info';

const useStyles = makeStyles({
  avatar: {
    width: '300px',
    height: '300px',
  },
  proDetail: {
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  followersSection: {
    width: '50%',
    display: 'flex',
  },
  usernameButton: {
    margin: '10px 0',
  },
});

const ProfileDetail: React.FC<{ profile: ProfileType }> = ({ profile }) => {
  const classes = useStyles();
  return (
    <>
      <Avatar
        className={classes.avatar}
        src={profile.avatar_url}
        alt='avatar'
      />
      <Button className={classes.usernameButton}>{profile.login}</Button>
      <div className={classes.followersSection}>
        <GroupIcon />
        <Typography style={{ margin: '0 3px' }}>{profile.followers}</Typography>
        <Typography>followers</Typography>
        <span style={{ margin: '0 3px' }}>.</span>
        <Typography style={{ margin: '0 3px' }}>{profile.following}</Typography>
        <Typography>following</Typography>
      </div>
      <div className={classes.proDetail}>
        {profile.name && <Info title='name' value={profile.name} />}
        <Info title='username' value={profile.login} />
        {profile.email && <Info title='email' value={profile.email} />}
        {profile.bio && <Info title='bio' value={profile.bio} />}
      </div>
    </>
  );
};

export default ProfileDetail;
