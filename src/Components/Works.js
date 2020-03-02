import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Works = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.blackBox}>
        <div className={classes.title}>
          <p className={classes.hello}>RECENT WORKS</p>
          <h1 className={classes.headerText}>
            We love what we do, check out some of our latest works
          </h1>
          <hr className={classes.line} />
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
    top: '24%',
    height: '18%'
  },
  hello: {
    letterSpacing: '1px',
    fontWeight: 800,
    color: '#39b54a'
  },
  headerText: {
    color: 'white',
    fontSize: '50px',
    width: '55%',
    margin: 'auto'
  },
  line: {
    width: '36%',
    border: '0.5px solid white',
    opacity: 0.05,
    marginTop: '2%'
  },
  images: {
    width: '70%',
    margin: 'auto',
    display: 'flex',
    top:"-22%",
    position:"relative",
    height:"185%"
  },
  columnOne: {
    width:"80%",
    display:"flex",
    flexDirection:"column"
  },
  columnTwo:{
    width: "80%",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  }
}));

export default Works;
