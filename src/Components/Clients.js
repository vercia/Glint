import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Swiper from 'react-id-swiper';
import ScrollAnimation from 'react-animate-on-scroll';
import apple from './images/apple.png'
import atom from './images/atom.png';
import blackberry from './images/blackberry.png';
import dropbox from './images/dropbox.png';
import envato from './images/envato.png';
import firefox from './images/firefox.png';
import joomla from './images/joomla.png';
import magento from './images/magento.png';
import user1 from './images/user-01.jpg'
import user2 from './images/user-02.jpg';
import user3 from './images/user-05.jpg';

const Clients = () => {
  const classes = useStyles();

  const params = {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  const paramsTwo = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <div className={classes.container} id='clients'>
      <div className={classes.title}>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={2}>
          <Header number={3} />
        </ScrollAnimation>
        <div className={classes.swipe}>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={2}>
            <Swiper {...params}>
              <div>
                <img
                  src={apple}
                  className={classes.image}
                  alt='technology'
                />
              </div>
              <div>
                <img
                  src={atom}
                  className={classes.image}
                  alt='technology'
                />
              </div>
              <div>
                <img
                  src={blackberry}
                  className={classes.image}
                  alt='technology'
                />
              </div>

              <div>
                <img
                  src={dropbox}
                  className={classes.image}
                  alt='technology'
                />
              </div>
              <div>
                <img
                  src={envato}
                  className={classes.image}
                  alt='technology'
                />
              </div>
              <div>
                <img
                  src={firefox}
                  className={classes.image}
                  alt='technology'
                />
              </div>
              <div>
                <img
                  src={joomla}
                  className={classes.image}
                  alt='technology'
                />
              </div>
              <div>
                <img
                  src={magento}
                  className={classes.image}
                  alt='technology'
                />
              </div>
            </Swiper>
          </ScrollAnimation>
        </div>
        <hr className={classes.line} />
        <div className={classes.swipeOne}>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={2}>
            <Swiper {...paramsTwo}>
              <div>
                <p className={classes.text}>
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque
                  distinctio nam accusantium ipsum. Laudantium quia consequatur
                  molestias delectus culpa facere hic dolores aperiam.
                  Accusantium quos qui praesentium corpori. Excepturi nam
                  cupiditate culpa doloremque deleniti repellat.
                </p>
                <img
                  src={user1}
                  className={classes.avatar}
                  alt='avatar'
                />
                <div className={classes.spanText}>
                  <span className={classes.span}>Tim Cook</span>
                  <span className={classes.spanTwo}>CEO, Apple</span>
                </div>
              </div>
              <div>
                <p className={classes.text}>
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.
                  Veniam quos repellat voluptas animi adipisci. Nisi eaque
                  consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                  Qui ipsam temporibus quisquam vel.
                </p>
                <img
                  src={user3}
                  className={classes.avatar}
                  alt='avatar'
                />
                <div className={classes.spanText}>
                  <span className={classes.span}>Sundar Pichai</span>
                  <span className={classes.spanTwo}>CEO, Google</span>
                </div>
              </div>
              <div>
                <p className={classes.text}>
                  Repellat dignissimos libero. Qui sed at corrupti expedita
                  voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  Autem eaque officia cum exercitationem sunt voluptatum
                  accusamus. Quasi voluptas eius distinctio.
                </p>
                <img
                  src={user2}
                  className={classes.avatar}
                  alt='avatar'
                />
                <div className={classes.spanText}>
                  <span className={classes.span}>Satya Nadella</span>
                  <span className={classes.spanTwo}>CEO, Microsoft</span>
                </div>
              </div>
            </Swiper>
          </ScrollAnimation>
        </div>
      </div>
      <div className={classes.lineEnd}></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '175%',
    top: '660%',
    backgroundColor: 'rgba(117,117,117,0.2)'
  },
  title: {
    position: 'relative',
    top: '10%',
    height: '10%',
    zIndex: 500,
    width: '58%',
    margin: 'auto'
  },
  line: {
    width: '65%',
    border: '0.5px solid black',
    opacity: 0.07,
    marginTop: '6%'
  },
  image: {
    width: '80%',
    marginTop: '50%',
    opacity: 0.55,
    "&:hover":{
      opacity:.9
    }
  },
  text: {
    fontFamily: 'lora-regular',
    fontSize: '35px',
    lineHeight: '1.5em',
    width: '80%',
    margin: 'auto',
    opacity: 0.6,
    marginTop: '12%'
  },
  avatar: {
    width: '7%',
    borderRadius: '100%',
    marginTop: '5%'
  },
  spanText: {
    display: 'flex',
    flexDirection: 'column',
    width: '15%',
    margin: 'auto'
  },
  span: {
    fontWeight: 600,
    lineHeight: '1.5em',
    fontSize: '17px'
  },
  spanTwo: {
    fontSize: '14px',
    opacity: 0.7
  },
  swipeOne: {
    marginTop: '-8%'
  },
  lineEnd: {
    width: '2px',
    height: '8%',
    backgroundColor: '#39b54a',
    position: 'absolute',
    right: '50%',
    bottom: 0
  }
}));

export default Clients;
