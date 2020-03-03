import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

const Works = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.blackBox}>
        <div className={classes.title}>
          <Header number={2} />
        </div>
      </div>
      <div className={classes.images}>
        <div className={classes.columnOne}>
          <img
            src='https://colorlib.com/etc/glint/images/portfolio/lady-shutterbug.jpg'
            className='pic'
          />
          <img
            src='https://colorlib.com/etc/glint/images/portfolio/the-beetle.jpg'
            className='pic'
          />
          <img
            src='https://colorlib.com/etc/glint/images/portfolio/guitarist.jpg'
            className='pic'
          />
        </div>
        <div className={classes.columnTwo}>
          <img
            src='https://colorlib.com/etc/glint/images/portfolio/woodcraft.jpg'
            className='pic'
          />
          <img
            src='https://colorlib.com/etc/glint/images/portfolio/grow-green.jpg'
            className='pic'
          />

          <img
            src='https://colorlib.com/etc/glint/images/portfolio/palmeira.jpg'
            className='pic'
          />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '120%',
    top: '380%'
  },
  blackBox: {
    height: '65%',
    backgroundColor: '#111'
  },
  title: {
    position: 'relative',
    top: '22%',
    height: '18%',
    width: '55%',
    margin: 'auto',
    letterSpacing: '2px'
  },
  images: {
    width: '70%',
    margin: 'auto',
    display: 'flex',
    top: '-22%',
    position: 'relative',
    height: '185%'
  },
  columnOne: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  columnTwo: {
    width: '80%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }
}));

export default Works;
