import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Clients = () => {
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <p className={classes.hello}>OUR CLIENTS</p>
          <h1 className={classes.headerText}>
            Glint has been honored to partner up with these clients
          </h1>
          <p>Here will be react-id-swiper</p>
          <hr className={classes.line} />
        </div>
      </div>
    );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '120%',
    top: '660%',
        backgroundColor: 'rgba(117,117,117,0.2)'
  },
  title: {
    position: 'relative',
    top: '15%',
    height: '18%',
    zIndex:500
  },
  hello: {
    letterSpacing: '2px',
    fontWeight: 700,
    color: '#39b54a'
  },
  headerText: {
    color: 'black',
    fontSize: '50px',
    width: '55%',
    margin: 'auto'
  },
  line: {
    width: '40%',
    border: '0.5px solid black',
    opacity: 0.05,
    marginTop: '2%'
  }
}));

export default Clients;
