import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p className={classes.hello}>HELLO THERE</p>
              <h1 className={classes.headerText}>We Are Glint</h1>
        <hr className={classes.line} />
      </div>
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
    top: '16%',
    height:"18%"
  },
  hello: {
    letterSpacing: '1px',
    fontWeight: 800
  },
  headerText: {
    color: 'white',
    fontSize: '80px',
    lineHeight: '.4em'
  },
  line: {
    width: '30%',
    border: '0.5px solid white',
    opacity: .3,
    marginTop:"4%"
  }
}));

export default About;
