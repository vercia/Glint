import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const BackgroundText = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        src='https://colorlib.com/etc/glint/images/logo.png'
        className={classes.image}
        alt="logo"
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
      <div className={classes.icons}>
        <span className={classes.span}>
          <i class='fab fa-facebook-f'></i>
        </span>
        <span className={classes.span}>
          <i class='fab fa-twitter'></i>
        </span>
        <span className={classes.span}>
          <i class='fab fa-instagram'></i>
        </span>
      </div>
      <div className={classes.scroll}>
        <i class='fas fa-chevron-down' style={{ color: "#39b54a", fontSize: "15px"}}/>
        <p className={classes.scrollText}>SCROLL DOWN</p>
        <hr className={classes.lineHome}/>
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
    height: '3%',
    float: 'left',
    padding: '35px'
  },
  welcome: {
    opacity: '.7',
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
    backgroundColor: 'transparent',
    border: '2px solid white',
    width: '35%',
    height: '60%',
    textTransform: 'uppercase',
    fontSize: '13px',
    color: 'white',
    letterSpacing: '2px',
    marginLeft: '15px',
    fontWeight: 500
  },
  icons: {
    width: '8%',
    display: 'flex',
    flexDirection: 'column',
    right: '0%',
    position: 'absolute',
    top: '40%'
  },
  span: {
    paddingTop: '7px',
    color: 'white',
    fontSize: '14px',
    marginTop: '15%',
    marginLeft: '20%',
    border: '2px solid white',
    borderRadius: '100%',
    height: '22px',
    width: '29px'
  },
  scroll: {
    width: '13%',
    height: '14%',
    display: 'flex',
    position: 'absolute',
    right: '3%',
    bottom: '-9%'
  },
  scrollText: {
    color: 'white',
    fontSize: '12px',
    display: 'flex',
    paddingLeft: '8px',
    letterSpacing: '1px',
    marginTop: '8%',
    fontWeight: 600
  },
  lineHome: {
    border: '1px solid #39b54a',
    marginTop: '8%',
    position: 'relative',
    height: '92%',
    marginBottom: '0%'
  }
}));

export default BackgroundText;
