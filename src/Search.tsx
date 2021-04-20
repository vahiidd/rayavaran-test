import { TextField, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  search: {
    width: '70%',
  },
  button: {
    marginTop: '15px',
  },
});

const Search = () => {
  const classes = useStyles();
  const [username, setUsername] = useState<string>('');
  const history = useHistory();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    history.push(`/profile/${username}`);
  };

  return (
    <form onSubmit={submitHandler} className={classes.root}>
      <TextField
        className={classes.search}
        label='username'
        type='text'
        name='username'
        value={username}
        onChange={changeHandler}
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        type='submit'
        disabled={!username}
      >
        Submit
      </Button>
    </form>
  );
};

export default Search;
