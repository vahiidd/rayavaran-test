import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from './Octocat.png';
import Search from './Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img alt='logo' src={logo} className={classes.logo} />
      <Search />
    </div>
  );
};

export default Home;
