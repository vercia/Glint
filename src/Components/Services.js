import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p className={classes.hello}>WHAT WE DO</p>
        <h1 className={classes.headerText}>
          We’ve got everything you need to launch and grow your business
        </h1>
        <hr className={classes.line} />
      </div>
      <div className={classes.middle}>
        <div className={classes.section}>
          <header className={classes.header}>
            <i
              class='fas fa-paint-brush'
              style={{
                color: '#39b54a',
                fontSize: '50px',
                marginRight: '16px'
              }}
            />
            <p>Brand Identity</p>
          </header>
          <p className={classes.text}>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className={classes.section}>
          <header className={classes.header}>
            <i
              class='fas fa-object-group'
              style={{
                color: '#39b54a',
                fontSize: '50px',
                marginRight: '16px'
              }}
            />
            <p>Illustration</p>
          </header>
          <p className={classes.text}>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className={classes.section}>
          <header className={classes.header}>
            <i
              class='fas fa-bullhorn'
              style={{
                color: '#39b54a',
                fontSize: '50px',
                marginRight: '16px'
              }}
            />
            <p>Marketing</p>
          </header>
          <p className={classes.text}>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className={classes.section}>
          <header className={classes.header}>
            <i
              class='fas fa-globe-americas'
              style={{
                color: '#39b54a',
                fontSize: '50px',
                marginRight: '16px'
              }}
            />
            <p>Web Design</p>
          </header>
          <p className={classes.text}>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className={classes.section}>
          <header className={classes.header}>
            <i
              class='fas fa-cube'
              style={{
                color: '#39b54a',
                fontSize: '50px',
                marginRight: '16px'
              }}
            />
            <p>Packaging Design</p>
          </header>
          <p className={classes.text}>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className={classes.section}>
          <header className={classes.header}>
            <i
              class='fas fa-shapes'
              style={{
                color: '#39b54a',
                fontSize: '50px',
                marginRight: '16px'
              }}
            />
            <p>Web Development</p>
          </header>
          <p className={classes.text}>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
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
    top: '12%',
    height: '18%'
  },
  hello: {
    letterSpacing: '1px',
    fontWeight: 800,
    color: '#39b54a'
  },
  headerText: {
    color: 'black',
    fontSize: '50px',
    width: '60%',
    margin: 'auto'
  },
  line: {
    width: '36%',
    border: '0.5px solid black',
    opacity: 0.1,
    marginTop: '2%'
  },
  middle: {
    position: 'relative',
    top: '16%',
    width: '80%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  },
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

export default Services;
