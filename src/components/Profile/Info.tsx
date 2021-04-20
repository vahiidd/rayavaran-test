import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  proTitle: {
    fontWeight: 'bold',
    color: 'gray',
  },
  proValue: {
    marginLeft: '10px',
    marginBottom: '10px',
  },
});

interface InfoType {
  title: string;
  value: string;
}

const Info: React.FC<InfoType> = ({ title, value }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h6' className={classes.proTitle}>
        {title}:
      </Typography>
      <Typography className={classes.proValue}>{value}</Typography>
    </div>
  );
};

export default Info;
