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
        padding: '0px 20px',
    },
    menuBttons: {
        color: 'rgb(38, 38, 38)',
        fontSize: 14,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontWeight: 400,
        lineHeight: '14px',
        '&:hover': {
            borderBottom: '1px solid black'
        }
    },
    menuButtonDiv: {
        backgroundColor: '#f2f2f2',
        // padding: '0px 10px',
        padding: theme.spacing(2),
        '&:hover': {
            backgroundColor: '#e6e6e6',
        }
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
                    Get Help
                    </span>
                {/* </a> */}
            </div>
            {/* <Button className={classes.navButtonsLeft} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Get Help
            </Button> */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div className={classes.menuButtonDiv}>
                    <a style={{ cursor: 'pointer' }}>
                        <span className={classes.menuBttons} >
                            Skype Support
                        </span>
                    </a>
                </div>
                <div className={classes.menuButtonDiv}>
                    <a style={{ cursor: 'pointer' }}>
                        <span className={classes.menuBttons} >
                            Blogs
                        </span>
                    </a>
                </div>
                <div className={classes.menuButtonDiv}>
                    <a style={{ cursor: 'pointer' }}>
                        <span className={classes.menuBttons} >
                            Community
                        </span>
                    </a>
                </div>
                <div className={classes.menuButtonDiv}>
                    <a style={{ cursor: 'pointer' }}>
                        <span className={classes.menuBttons} >
                            About Skype
                        </span>
                    </a>
                </div>
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