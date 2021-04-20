import { Box, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='80vh'
    >
      <CircularProgress color='primary' size='60px' />
      <Typography variant='h6'>Loading ...</Typography>
    </Box>
  );
};

export default LoadingSpinner;
