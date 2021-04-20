import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import notFoundImg from './404.png';

const NotFound = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <div>
      <img src={notFoundImg} alt='404' />
      <Button
        onClick={clickHandler}
        variant='contained'
        style={{ width: '50%', marginLeft: '25%' }}
      >
        back to search again
      </Button>
    </div>
  );
};

export default NotFound;
