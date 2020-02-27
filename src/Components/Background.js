import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const Nav = () => {
    const classes = useStyles()

    return(
        <div className={classes.container}>
            <img src="https://colorlib.com/etc/glint/images/logo.png" className={classes.image} />
        </div>
    )
}

const useStyles = makeStyles(() => ({
    container:{
        width:"100%",
        backgroundColor:"yellow",
        position:"absolute"
    },
    image: {
        width: '6%',
        height: '6%',
        backgroundColor: "red",
        float:"left",
        padding: "25px"
    }
}));

export default Nav