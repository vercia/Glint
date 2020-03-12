import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Service from './Service'
import ScrollAnimation from 'react-animate-on-scroll';
import arrOfServices from './arrOfServices'

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='services'>
      <div className={classes.title}>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration='2'>
        <Header number={1} />
        </ScrollAnimation>
      </div>
      <div className={classes.middle}>
        {arrOfServices.map((item) => {
          return (
            <ScrollAnimation
              animateIn='fadeInUp'
              animateOnce={true}
              duration='2'
            >
              <Service
                text={item.text}
                icon={item.icon}
                title={item.title}
                key={item.title}
              />
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '160%',
    backgroundColor: 'white',
    top: '220%'
  },
  title: {
    position: 'relative',
    top: '8%',
    height: '18%',
    letterSpacing: '2px',
    width: '70%',
    margin: 'auto'
  },
  middle: {
    position: 'relative',
    top: '10%',
    width: '80%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  }
}));

export default Services;
