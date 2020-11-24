import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bgContact from './images/contact-bg.jpg'

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
    backgroundImage: `url(${bgContact})`,
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
