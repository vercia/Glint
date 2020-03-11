import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Image = (props) => {
  const classes = useStyles();

  return (
    <div class='hvrbox'>
      <div class='hvrbox-img'>
        <img src={props.path} class='pic' alt='art' />
      </div>
      <div class='hvrbox-layer_top'>
        <div class='hvrbox-text'>
          <div className={classes.title}>
            <h3 style={{ fontSize: '15px', letterSpacing: '2px' }}>
              SHUTTERBUG
            </h3>
            <p style={{ fontWeight: 200, fontSize: '14px', opacity: 0.5 }}>
              Branding
            </p>
          </div>
        </div>
        <div class='hvrbox-icon'>
          <div className={classes.line}></div>
          <span className={classes.span}>
            <i class='fas fa-link' style={{ fontSize: '20px' }} />
          </span>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'left',
    lineHeight: '0.5em',
    position: 'absolute'
  },
  span: {
    paddingLeft: '12px',
    paddingTop: '12px',
    color: 'white',
    fontSize: '14px',
    marginLeft: '6%',
    border: '0.5px solid white',
    borderRadius: '100%',
    height: '50px',
    width: '50px',
    display: 'flex',
    position: 'absolute',
    marginTop: '3.5%'
  },
  line: {
    width: '1px',
    height: '5vh',
    backgroundColor: '#fff',
    position: 'absolute',
    marginLeft: '11%',
    marginTop: '-5%'
  }
}));

export default Image;
