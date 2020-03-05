import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import Header from './Header';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header number={0} />
      </div>
      <div className={classes.middle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
      </div>
      <div className={classes.stats}>
        <div className={classes.containerStats}>
          <CountUp start={0} end={127} duration={4} className={classes.count} />
          <p className={classes.text}>Awards Received</p>
        </div>
        <div className={classes.containerStats}>
          <CountUp
            start={0}
            end={1505}
            duration={4}
            className={classes.count}
          />
          <p>Cups of Coffee</p>
        </div>
        <div className={classes.containerStats}>
          <CountUp start={0} end={109} duration={4} className={classes.count} />
          <p>Projects Completed</p>
        </div>
        <div className={classes.containerStats} style={{ borderRight: 'none' }}>
          <CountUp start={0} end={102} duration={4} className={classes.count} />
          <p>Happy Clients</p>
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '110%',
    backgroundColor: '#39b54a',
    top: '110%'
  },
  header: {
    position: 'relative',
    top: '10%',
    height: '20%',
    letterSpacing: '2px'
  },
  middle: {
    position: 'relative',
    top: '16%',
    width: '65%',
    fontSize: '26px',
    lineHeight: '1.5em',
    margin: 'auto',
    fontWeight: 300,
    fontFamily: 'lora-regular'
  },
  stats: {
    position: 'relative',
    top: '20%',
    display: 'flex',
    margin: 'auto',
    width: '70%'
  },
  containerStats: {
    fontWeight: 700,
    borderRight: '1px solid rgba(255,255,255,0.2)',
    width: '25%',
    margin: 'auto'
  },
  count: {
    fontSize: '80px',
    color: 'white'
  },
  text: {
    fontSize: '18px'
  },
  line: {
    width: '2px',
    height: '12%',
    backgroundColor: '#fff',
    position: 'absolute',
    right: '4.65%',
    top: 0
  }
}));

export default About;