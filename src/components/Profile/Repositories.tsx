import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { RepoType } from '../../dataTypes';

const useStyles = makeStyles({
  repoName: {
    color: '#0366d6',
  },
  repoDetail: {
    marginLeft: 10,
  },
  hr: {
    border: 'none',
    borderTop: '1px solid lightGray',
  },
});

const Repositories: React.FC<{ repos: RepoType[] }> = ({ repos }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h3'>Repositories</Typography>
      <hr className={classes.hr} />
      {repos.map((repo) => (
        <div>
          <Typography variant='h5' className={classes.repoName}>
            {repo.name}
          </Typography>
          <Typography className={classes.repoDetail}>{repo.description}</Typography>
          <Typography className={classes.repoDetail}>{repo.language}</Typography>
          <hr className={classes.hr} />
        </div>
      ))}
    </>
  );
};

export default Repositories;
