import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Image from './Image';
import ScrollAnimation from 'react-animate-on-scroll';
import grow from './images/grow-green.jpg';
import guitarist from './images/guitarist.jpg';
import lady from './images/lady-shutterbug.jpg';
import palmeira from './images/palmeira.jpg';
import beetle from './images/the-beetle.jpg';
import woodcraft from './images/woodcraft.jpg';

const Works = () => {
  const classes = useStyles();

  const arrOfImagesOne = [
    {
      path: lady
    },
    {
      path: beetle
    },
    {
      path: guitarist
    }
  ];

  const arrOfImagesTwo = [
    {
      path: woodcraft
    },
    {
      path: grow
    },
    {
      path: palmeira
    }
  ];

  return (
    <div className={classes.container} id='works'>
      <div className={classes.blackBox}>
        <div className={classes.title}>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={2}>
            <Header number={2} />
          </ScrollAnimation>
        </div>
      </div>
      <div className={classes.images}>
        <div className={classes.columnOne}>
          {arrOfImagesOne.map((item) => {
            return (
              <ScrollAnimation
                animateIn='fadeInUp'
                animateOnce={true}
                duration={2}
                style={{ marginTop: -6 }}
                key={item.path}
              >
                <Image path={item.path} />
              </ScrollAnimation>
            );
          })}
        </div>
        <div className={classes.columnTwo}>
          {arrOfImagesTwo.map((item) => {
            return (
              <ScrollAnimation
                animateIn='fadeInUp'
                animateOnce={true}
                duration={2}
                style={{ marginTop: -6 }}
                key={item.path}
              >
                <Image path={item.path} />
              </ScrollAnimation>
            );
          })}
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
    position: 'relative'
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
