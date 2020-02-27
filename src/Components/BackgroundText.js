import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const BackgroundText = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        src='https://colorlib.com/etc/glint/images/logo.png'
        className={classes.image}
      />
      <div className={classes.textContainer}>
        <p className={classes.welcome}>Welcome to glint</p>
        <h1 className={classes.text}>
          We are a creative group of people who design influential brands and
          digital experiences.
        </h1>
      </div>
      <div className={classes.buttons}>
        <button className={classes.button} type='submit'>
          Start a project
        </button>
        <button className={classes.button} type='submit'>
          More about us
        </button>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '100%'
  },
  image: {
    width: '5%',
    height: '3%',
    float: 'left',
    padding: '35px'
  },
  welcome: {
    opacity: '.8',
    fontSize: '18px',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '1.5px'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    textAlign: 'left',
    height: '40%',
    top: '30%',
    left: '6%',
    position: 'relative',
    color: 'white'
  },
  text: {
    fontSize: '55px',
    lineHeight: '1.5em',
    width: '85%',
    bottom: '12%',
    position: 'relative'
  },
  buttons: {
    position: 'relative',
    top: '45%',
    width: '40%',
    height: '10%',
    left: '10%'
  },
  button: {
    borderRadius: '0px',
    backgroundColor: 'transparent',
    border: '2px solid white',
    width: '35%',
    height: '60%',
    textTransform: 'uppercase',
    fontSize: '13px',
    color: 'white',
    letterSpacing: '2px',
    marginLeft: '15px'
  }
}));

export default BackgroundText;
