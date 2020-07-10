import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core';
import i from '../public/images/i.png';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '16px',
        color: 'rgb(43, 44, 51)',
        '&:hover': {
            backgroundColor: '#1686d9',
            color: 'white'
        }
    },
    typography1: {
        padding: theme.spacing(2),
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '20px',
        color: 'rgb(43, 44, 51)',
        backgroundColor: '#f0f4f8',
    },
    navButtonsLeft: {
        color: 'rgb(38, 38, 38)',
        fontSize: 13,
        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: 'normal',
        '&:hover': {
            borderBottom: '2px solid black'
        },
        '&::after': {
            content: `url(${i})`,
            position: 'absolute',
            fontSize: 14,
            display: 'inline-block',
            color: 'currentColor',
            fontWeight: 400,
            paddingTop: 6,
            paddingLeft: 5,
        }
    },
    buttonDiv: {
        padding: '0px 10px',
    }
}));

export default function SimpleMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className={classes.buttonDiv} onClick={handleClick}>
                {/* <a style={{ cursor: 'pointer' }}> */}
                <span className={classes.navButtonsLeft} >
                    Sign in
                    </span>
                {/* </a> */}
            </div>
            {/* <Button className={classes.navButtonsLeft} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Sign in
            </Button> */}

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography className={classes.typography}>My account</Typography>
                <Typography className={classes.typography}>Use Skype online</Typography>
                <Typography className={classes.typography1}>New to Skype? <span style={{color: '#1686d9'}}>Sign up</span></Typography>
            </Popover>
            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => props.history.push('/backend/snaps')}>Snaps</MenuItem>
                <MenuItem onClick={() => props.history.push('/backend/snaps-orders')}>Orders</MenuItem>
            </Menu> */}
        </div>
    );
}