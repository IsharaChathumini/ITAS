import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import logo from '../images/logo.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction';

const pages = ['Home', 'Log In'];

const HomeNavbar = () => {

    const { userInfo } = useSelector(state => state.signIn); // Fetch userInfo, assuming it contains role
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // log out user
    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }

    // Define user role and set the correct dashboard link
    const userRole = userInfo?.role; // Assuming userInfo contains 'role'

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters sx={{ minHeight: '80px' }}>
                    {/* Left side: ENG, logo, ITAS */}
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: '2.5rem',
                                borderRight: '2px solid white',
                                pr: 2, 
                                ml: 0, 
                            }}
                        >
                            ENG
                        </Typography>
                        <img src={logo} width="40" height="50" alt="logo" style={{ margin: '0 15px' }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: '2.5rem',
                                borderLeft: '2px solid white',
                                pl: 2, 
                                ml: 0, 
                            }}
                        >
                            ITAS
                        </Typography>
                    </Box>

                    {/* Center: Home and Register buttons */}
                    <Box sx={{ display: 'flex', flexGrow: 2, justifyContent: 'center' }}>
                        

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', fontSize: '1rem', mx: 2 }}>
                            <Link to="/register" style={{ color: 'white', textDecoration: "none" }}>
                                Register
                            </Link>
                        </Button>
                    </Box>

                    {/* Right side: User avatar */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& .MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                }
                            }}
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            
                            {!userInfo ?
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration: "none", color: palette.primary.main }} to="/login">Log In</Link>
                                    </Typography>
                                </MenuItem> :
                                <MenuItem onClick={logOutUser}>
                                    <Typography style={{ textDecoration: "none", color: palette.primary.main }} textAlign="center">Log Out</Typography>
                                </MenuItem>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HomeNavbar;
