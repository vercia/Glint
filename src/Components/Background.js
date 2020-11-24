import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hero from './images/hero.jpg'

const Background = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.black}></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    backgroundImage: `url(${hero})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '110%'
  },
  black: {
    backgroundColor: 'black',
    height: '100%',
    opacity: 0.6
  }
}));

export default Background;
