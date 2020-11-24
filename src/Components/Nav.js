import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import LinkOfNav from './LinkOfNav';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

const Nav = () => {
  const classes = useStyles();
  let position = useWindowScrollPosition();
  const [state, setState] = useState({
    right: false
  });
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const links = [
    { path: 'home', title: 'Home' },
    { path: 'about', title: 'About' },
    { path: 'services', title: 'Services' },
    { path: 'works', title: 'Works' },
    { path: 'clients', title: 'Clients' },
    { path: 'contact', title: 'Contact' }
  ];

  const sideList = (side) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.menuOpen}>
        <div class='item animated fadeInRight'>
          <div className={classes.top}>
            <p className={classes.navigation}>NAVIGATION</p>
            <div className={classes.close}>
              <i
                class='fas fa-times'
                onClick={handleDrawerClose}
                style={{
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              ></i>
            </div>
          </div>
          <div className={classes.middle}>
            <ul className={classes.middleList}>
              {links.map((item) => {
                return (
                  <LinkOfNav
                    key={item.path}
                    path={item.path}
                    title={item.title}
                  />
                );
              })}
            </ul>
          </div>
          <div className={classes.end}>
            <p>
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum
              voluptatem porro iusto sequi veritatis libero enim. Iusto id
              <br /> suscipit veritatis neque reprehenderit.
            </p>
          </div>
          <div className={classes.icons}>
            <span className={classes.icon}>
              <i class='fab fa-facebook-f' />
            </span>
            <span className={classes.icon}>
              <i class='fab fa-twitter' />
            </span>
            <span className={classes.icon}>
              <i class='fab fa-instagram' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        className={position.y > 250 ? classes.navlist : classes.nav}
        onClick={toggleDrawer('right', true)}
      >
        <p className={classes.menu}>MENU</p>
        <i class='fas fa-bars' style={{ cursor: 'pointer' }}></i>
      </button>
      <SwipeableDrawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
        transitionDuration={{ enter: 1000, exit: 1000 }}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  nav: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 400,
    right: '2%',
    top: '3%',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none'
  },
  navlist: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 400,
    right: '2%',
    top: '3%',
    backgroundColor: 'black',
    border: 'none',
    outline: 'none'
  },
  menu: {
    fontSize: '14px',
    letterSpacing: '2px',
    color: '#39b54a',
    fontWeight: 600,
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      transition: '0.6s'
    }
  },
  list: {
    backgroundColor: '#0c0c0c'
  },
  close: {
    backgroundColor: 'rgba(0,0,0,.3)',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuOpen: {
    color: 'white'
  },
  navigation: {
    color: '#39b54a',
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '2px'
  },
  top: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '6%',
    top: '4%',
    left: '-2%'
  },
  middle: {
    position: 'absolute',
    height: '40%',
    width: '100%',
    top: '12%'
  },
  middleList: {
    listStyle: 'none',
    position: 'relative',
    fontSize: '20px',
    lineHeight: '2.3em',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  },
  end: {
    position: 'absolute',
    top: '53%',
    fontSize: '13px',
    width: '78%',
    right: '10%',
    lineHeight: '1.8em',
    opacity: 0.3
  },
  icons: {
    position: 'absolute',
    top: '77%',
    fontSize: '18px',
    width: '30%',
    display: 'flex',
    justifyContent: 'space-around',
    left: '10%'
  },
  icon:{
    opacity:0.3,
    "&:hover":{
      opacity:1
    }
  },
  animated: {
    backgroundColor: 'red',
    height: '20vh',
    color: 'white'
  }
}));

export default Nav;
