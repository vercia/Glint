import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import arr from './index';

const Header = (props) => {
  const classes = useStyles();
  const number = props.number;

  return (
    <div className={classes.title}>
      <p
        style={{
          color: arr[number].colorOfTitleOne,
          letterSpacing: arr[number].letterSpaceOfTitleOne,
          fontWeight: 800
        }}
      >
        {arr[number].titleOne}
      </p>
      <h1
        style={{
          color: arr[number].colorOfTitleTwo,
          fontSize: arr[number].fontSizeOfTitleTwo,
          margin: 'auto'
        }}
      >
        {arr[number].titleTwo}
      </h1>
      <hr
        style={{
          opacity: arr[number].lineOpacity,
          border: arr[number].borderOfLine,
          width: arr[number].widthOfLine,
          marginTop: '2%'
        }}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    position: 'relative',
    top: '24%',
    height: '18%'
  }
}));

export default Header;
