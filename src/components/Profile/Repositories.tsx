import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { RepoType } from '../../dataTypes';

const useStyles = makeStyles({
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
          <Typography variant='h5'>{repo.name}</Typography>
          <Typography>{repo.description}</Typography>
          <Typography>{repo.language}</Typography>
          <hr className={classes.hr} />
        </div>
      ))}
    </>
  );
};

export default Repositories;
