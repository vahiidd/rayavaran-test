import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProfileType, RepoType } from '../../dataTypes';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ProfileDetail from './ProfileDetail';
import Repositories from './Repositories';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  leftGrid: {
    padding: '20px',
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  const [proData, setProData] = useState<ProfileType | {}>();
  const [repoData, setRepoData] = useState<RepoType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { username } = useParams() as { username: string };
  const history = useHistory();

  const baseUrl = 'https://api.github.com/users/';

  useEffect(() => {
    const getProfileDetail = async () => {
      try {
        const [proRes, repoRes] = await Promise.all([
          fetch(`${baseUrl}${username}`),
          fetch(`${baseUrl}${username}/repos`),
        ]);
        const [proData, repoData] = await Promise.all([
          proRes.json(),
          repoRes.json(),
        ]);
        if ('message' in proData && proData.message === 'Not Found') {
          history.push('/404');
          return;
        }
        setProData(proData);
        setRepoData(repoData);
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

  const profile = proData as ProfileType;
  const repos = repoData as RepoType[];

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} className={classes.leftGrid}>
          <ProfileDetail profile={profile} />
        </Grid>
        <Grid item xs={6} style={{ marginTop: 100 }}>
          <Repositories repos={repos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
