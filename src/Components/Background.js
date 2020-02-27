import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Nav = () => {
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
    backgroundImage: 'url(https://colorlib.com/etc/glint/images/hero-bg.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  },
  black: {
    backgroundColor: 'black',
    height: '100%',
    opacity: 0.7
  }
}));

export default Nav;
