import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface ProfileType {
  name: null | string;
  login: string;
  followers: number;
  following: number;
  avatar_url: string;
  bio: null | string;
  email: null | string;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: '300px',
    height: '300px',
  },
  leftGrid: {
    padding: '20px',
  },
  rightGrid: {
    marginTop: '100px',
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
  proTitle: {
    fontWeight: 'bold',
    color: 'gray',
  },
  proValue: {
    marginLeft: '10px',
    marginBottom: '10px',
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  const [data, setData] = useState<ProfileType | {}>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { username } = useParams() as { username: string };
  const history = useHistory();

  useEffect(() => {
    const getProfileDetail = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if ('message' in data && data.message === 'Not Found') {
          history.push('/404');
          return;
        }
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProfileDetail();
  }, [history, username]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const profile = data as ProfileType;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} className={classes.leftGrid}>
          <Avatar
            className={classes.avatar}
            src={profile.avatar_url}
            alt='avatar'
          />
          <Button className={classes.usernameButton}>{profile.login}</Button>
          <div className={classes.followersSection}>
            <GroupIcon />
            <Typography style={{ margin: '0 3px' }}>
              {profile.followers}
            </Typography>
            <Typography>followers</Typography>
            <span style={{ margin: '0 3px' }}>.</span>
            <Typography style={{ margin: '0 3px' }}>
              {profile.following}
            </Typography>
            <Typography>following</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.rightGrid}>
            {profile.name && (
              <div>
                <Typography variant='h5' className={classes.proTitle}>
                  name:
                </Typography>
                <Typography className={classes.proValue}>
                  {profile.name}
                </Typography>
              </div>
            )}
            <div>
              <Typography variant='h5' className={classes.proTitle}>
                username:
              </Typography>
              <Typography className={classes.proValue}>
                {profile.login}
              </Typography>
            </div>

            {profile.email && (
              <div>
                <Typography variant='h5' className={classes.proTitle}>
                  email:
                </Typography>
                <Typography className={classes.proValue}>
                  {profile.email}
                </Typography>
              </div>
            )}

            {profile.bio && (
              <div>
                <Typography variant='h5' className={classes.proTitle}>
                  bio:
                </Typography>
                <Typography className={classes.proValue}>
                  {profile.bio}
                </Typography>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
