import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Service from './Service'
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  const classes = useStyles();

  const arrOfServices = [
    {
      text:
        'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.Quo delectus est.Maiores voluptas ab sit natus veritatis ut.Debitis nulla cumque veritatis.Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
      icon: 'fas fa-paint-brush',
      title: 'Brand Identity'
    },
    {
      text:
        'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.Quo delectus est.Maiores voluptas ab sit natus veritatis ut.Debitis nulla cumque veritatis.Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
      icon: 'fas fa-object-group',
      title: 'Illustration'
    },
    {
      text:
        'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.Quo delectus est.Maiores voluptas ab sit natus veritatis ut.Debitis nulla cumque veritatis.Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
      icon: 'fas fa-bullhorn',
      title: 'Marketing'
    },
    {
      text:
        'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.Quo delectus est.Maiores voluptas ab sit natus veritatis ut.Debitis nulla cumque veritatis.Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
      icon: 'fas fa-globe-americas',
      title: 'Web Design'
    },
    {
      text:
        'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.Quo delectus est.Maiores voluptas ab sit natus veritatis ut.Debitis nulla cumque veritatis.Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
      icon: 'fas fa-cube',
      title: 'Packaging Design'
    },
    {
      text:
        'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.Quo delectus est.Maiores voluptas ab sit natus veritatis ut.Debitis nulla cumque veritatis.Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
      icon: 'fas fa-shapes',
      title: 'Web Development'
    }
  ];

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
