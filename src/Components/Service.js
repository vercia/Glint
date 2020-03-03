import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const Service = (props) => {
    const classes = useStyles();

  return (
    <div className={classes.section}>
      <header className={classes.header}>
        <i
          class={props.icon}
          style={{
            color: '#39b54a',
            fontSize: '50px',
            marginRight: '16px'
          }}
        />
        <p>{props.title}</p>
      </header>
      <p className={classes.text}>
        {props.text}
      </p>
    </div>
  );
};

const useStyles = makeStyles(() => ({
    section: {
        fontSize: '18px'
    },
    header: {
        display: 'flex',
        fontSize: '30px',
        width: '60%',
        marginLeft: '12px',
        fontWeight: 500
    },
    text: {
        width: '80%',
        marginLeft: '18%',
        textAlign: 'left',
        marginTop: '0%',
        opacity: 0.5,
        lineHeight: '1.5em'
    }
}));

export default Service
