import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

// Components
import Products from './products';
import GetHelp from './getHelp';
import SignIn from './signIn';
// import MarketingMenu from './MarketingMenu';

//image
import navlogo from '../public/images/navlogo.png';

const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        padding: '0px 30px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    right: {
        flexGrow: 1
    },
    title: {
        // flexGrow: 1,
        fontSize: '26px',
        // paddingRight: 5,
        // borderRight: '2px solid black'
    },
    border: {
        // content: "|",
        // display: 'block',
        // color: 'black',
        // fontSize: 24,
        // fontWeight: 400,
        // marginLeft: 15,
        // paddingLeft: 18,
        // position: 'absolute',
        // top: 7,
        float: 'right',
        '&::before': {
            display: 'block',
            color: 'black',
            fontSize: 24,
            fontWeight: 400,
            marginLeft: 15,
            paddingLeft: 18,
            position: 'absolute',
            top: 7,
            content: `"|"`,
        }
    },
    typography: {
        padding: theme.spacing(2),
    },
    navButtonsLeft: {
        color: 'rgb(38, 38, 38)',
        fontSize: 13,
        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: 'normal',
        '&:hover': {
            borderBottom: '2px solid black'
        }
    },
    buttonDiv: {
        padding: '0px 10px',
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ height: 54, backgroundColor: '#FFFFFF', marginBottom: 10, }} position="fixed">
                <Toolbar style={{ padding: 0, minHeight: 54 }}>
                    <div className={classes.right}>
                        <Typography variant="h6" className={classes.title}>
                            <a style={{ textDecoration: 'none', color: 'white', width: 137 }} href='#'>
                                <img src={navlogo} alt='logo' style={{ width: 108, marginTop: -1, float: 'left' }} />
                                <Typography className={classes.border}>
                                </Typography>
                            </a>
                        </Typography>
                    </div>
                    <div className={classes.buttonDiv}>
                        <a style={{ cursor: 'pointer' }}>
                            <span className={classes.navButtonsLeft}
                                style={{
                                    marginLeft: 48,
                                    color: 'rgb(38, 38, 38)',
                                    fontSize: 18,
                                    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                }}>
                                Skype
                            </span>
                        </a>
                    </div>
                    <div className={classes.buttonDiv}>
                        <a style={{ cursor: 'pointer' }}>
                            <span className={classes.navButtonsLeft} >
                                Downloads
                            </span>
                        </a>
                    </div>
                    <div className={classes.buttonDiv}>
                        <a style={{ cursor: 'pointer' }}>
                            <span className={classes.navButtonsLeft} >
                                Skype to Phone
                        </span>
                        </a>
                    </div>
                    <div className={classes.buttonDiv}>
                        <a style={{ cursor: 'pointer' }}>
                            <span className={classes.navButtonsLeft} >
                                Skype Number
                        </span>
                        </a>
                    </div>
                    <div className={classes.buttonDiv}>
                        <a style={{ cursor: 'pointer' }}>
                            <span className={classes.navButtonsLeft} >
                                Features
                        </span>
                        </a>
                    </div>
                    <Products {...props} />
                    <GetHelp {...props} />
                    <div style={{width: 344}}></div>
                    <div className={classes.buttonDiv}>
                        <a style={{ cursor: 'pointer' }}>
                            <span className={classes.navButtonsLeft} >
                                Host a meeting
                        </span>
                        </a>
                    </div>
                    <SignIn style={{ float: 'right' }}  {...props} />
                    <div style={{width: 25}}></div>
                </Toolbar>
            </div>
        </div >
    );
}