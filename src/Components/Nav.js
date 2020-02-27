import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <p className={classes.menu}>MENU</p>
      <i class='fas fa-bars'></i>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  nav: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 400,
    right: '2%',
    top: '3%'
  },
  menu: {
    fontSize: '14px',
    letterSpacing: '2px',
    color: '#39b54a'
  }
}));

export default Nav;
