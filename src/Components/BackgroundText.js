import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-scroll';

const BackgroundText = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='home'>
      <img
        src='https://colorlib.com/etc/glint/images/logo.png'
        className={classes.image}
        alt='logo'
      />
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration='2'>
        <div className={classes.all}>
          <div className={classes.textContainer}>
            <p className={classes.welcome}>WELCOME TO GLINT</p>
            <h1 className={classes.text}>
              We are a creative group of people who design influential brands
              and digital experiences.
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
      </ScrollAnimation>
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
        <i
          class='fas fa-chevron-down'
          style={{ color: '#39b54a', fontSize: '15px', cursor: 'pointer' }}
        />
        <Link
          activeClass='active'
          to="about"
          spy={true}
          smooth={true}
          duration={600}
          className={classes.scrollText}
        >
          SCROLL DOWN
        </Link>
        <hr className={classes.lineHome} />
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
    opacity: '.5',
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '2px',
    marginTop: '35%',
    marginBottom: '-4%'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    textAlign: 'left',
    left: '6%',
    position: 'relative',
    color: 'white'
  },
  text: {
    fontSize: '60px',
    lineHeight: '1.3em',
    width: '95%',
    position: 'relative',
    fontWeight: 600,
    letterSpacing: '1.5px'
  },
  buttons: {
    position: 'relative',
    marginTop: '3%',
    width: '40%',
    left: '11%'
  },
  button: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    width: '39%',
    height: '7vh',
    textTransform: 'uppercase',
    fontSize: '13px',
    color: 'white',
    letterSpacing: '2px',
    marginLeft: '15px',
    fontWeight: 600,
    cursor:"pointer",
    "&:hover":{
      backgroundColor:"white",
      color:"black",
      transitionDuration: "1s"
    }
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
    fontWeight: 600,
    cursor:"pointer"
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
