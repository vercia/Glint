import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='contact'>
      <div className={classes.header}>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration='2'>
          <Header number={4} />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration='0'>
        <div className={classes.contact}>
          <div className={classes.message}>
            <p className={classes.textMessage}>SEND US A MESSAGE</p>
            <form className={classes.form}>
              <input type='text' placeholder='Your Name' />
              <input type='text' placeholder='Your Email' />
              <input type='text' placeholder='Subject' />
              <textarea type='text' placeholder='Your Message' />
              <button type='submit' className={classes.button}>
                SUBMIT
              </button>
            </form>
          </div>
          <div style={{ backgroundColor: 'rgba(17,17,17,1)' }}>
            <p className={classes.textInfo}>CONTACT INFO</p>
            <div className={classes.all}>
              <div style={{ height: '40%' }}>
                <p className={classes.title}>Where to Find Us</p>
                <p className={classes.contactText}>
                  1600 Amphitheatre Parkway Mountain View, CA <br /> 94043 US
                </p>
              </div>
              <div style={{ height: '35%' }}>
                <p className={classes.title}>Email Us At</p>
                <p className={classes.contactText}>
                  contact@glintsite.com info@glintsite.com
                </p>
              </div>
              <div>
                <p className={classes.title}>Call Us At</p>
                <p className={classes.contactText}>
                  Phone: (+63) 555 1212 <br /> Mobile: (+63) 555 0100 <br />{' '}
                  Fax: (+63) 555 0101
                </p>
              </div>
            </div>
            <div className={classes.icons}>
              <i class='fab fa-facebook-f'></i>
              <i class='fab fa-twitter'></i>
              <i class='fab fa-instagram'></i>
            </div>
          </div>
        </div>
      </ScrollAnimation>
        <div className={classes.line}></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    height: '160%',
    top: '835%'
  },
  header: {
    position: 'relative',
    top: '11%',
    height: '20%',
    letterSpacing: '1px',
    width: '62%',
    margin: 'auto'
  },
  line: {
    width: '2px',
    height: '9%',
    backgroundColor: '#39b54a',
    position: 'absolute',
    right: '50%',
    top: 0
  },
  contact: {
    display: 'flex',
    height: '63%',
    marginTop: '8%',
    margin: 'auto',
    width: '70%',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    height: '90%'
  },
  textMessage: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'white',
    textAlign: 'left',
    marginLeft: '10%',
    marginTop: '10%',
    letterSpacing: '2px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    padding: '10%',
    height: '80vh',
    marginTop: '-8%'
  },
  button: {
    backgroundColor: '#39b54a',
    border: 'none',
    height: '10%',
    color: 'white',
    fontSize: '13px',
    letterSpacing: '2px',
    fontWeight: 600,
    marginTop: '6%'
  },
  textInfo: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    textAlign: 'left',
    padding: '14% 12%',
    letterSpacing: '2px'
  },
  all: {
    height: '50%',
    position: 'relative',
    width: '80%',
    color: 'white',
    textAlign: 'left',
    left: '10%'
  },
  title: {
    color: '#39b54a',
    fontSize: '18px',
    fontWeight: 600
  },
  contactText: {
    lineHeight: '1.9em',
    color: 'white',
    opacity: 0.3
  },
  icons:{
    fontSize:"18px",
    padding:"25px",
    marginTop:"26%",
    textAlign:"left",
    color:"white",
    justifyContent:"space-around",
    display:"flex",
    width:"30%"
  }
}));

export default Contact;
