import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Nav = () => {
  const classes = useStyles();
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

  const sideList = (side) => (
    // <div className={classes.container}>
    // <div className={classes.nav}>
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.menuOpen}>
        <div className={classes.top}>
          <p className={classes.navigation}>NAVIGATION</p>
          <div className={classes.close}>
            <i
              class='fas fa-times'
              onClick={handleDrawerClose}
              style={{
                fontSize: '18px'
              }}
            ></i>
          </div>
        </div>
        <div className={classes.middle}>
          <ul className={classes.middleList}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes.end}>
          <p>
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
            neque reprehenderit.
          </p>
        </div>
        <div className={classes.icons}>
          <i class='fab fa-facebook-f'></i>
          <i class='fab fa-twitter'></i>
          <i class='fab fa-instagram'></i>
        </div>
      </div>
    </div>
    //  </div>
    // </div>
  );

  return (
    <div>
      <button className={classes.nav} onClick={toggleDrawer('right', true)}>
        <p className={classes.menu}>MENU</p>
        <i class='fas fa-bars'></i>
      </button>
      <SwipeableDrawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
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
    position: 'absolute',
    zIndex: 400,
    right: '2%',
    top: '3%',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none'
  },
  menu: {
    fontSize: '14px',
    letterSpacing: '2px',
    color: '#39b54a',
    fontWeight: 600,
    '&:hover': {
      color: 'white',
      transition: '0.6s'
    }
  },
  list: {
    backgroundColor: '#0c0c0c',
    height: '100vh'
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
    fontWeight: 600,
    letterSpacing: '1px'
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
    height: '30%',
    width: '100%',
    top: '12%'
  },
  middleList: {
    listStyle: 'none',
    position: 'relative',
    fontSize: '20px',
    lineHeight: '2em',
    fontWeight: 500
  },
  end: {
    position: 'absolute',
    top: '50%',
    fontSize: '13px',
    width: '78%',
    right: '10%',
    lineHeight: '1.8em',
    opacity: 0.5
  },
  icons: {
    position: 'absolute',
    top: '70%',
    fontSize: '18px',
    width: '30%',
    display: 'flex',
    justifyContent: 'space-around',
    left: '10%',
    opacity: 0.5
  }
}));

export default Nav;
