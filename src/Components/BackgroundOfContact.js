import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const BackgroundOfContact = () => {
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
    backgroundImage:
      'url(https://colorlib.com/etc/glint/images/contact-bg.jpg)',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat',
    height: '160%',
    top: '835%'
  },
  black: {
    backgroundColor: '#151515',
    height: '100%',
    opacity: 0.85
  }
}));

export default BackgroundOfContact;
