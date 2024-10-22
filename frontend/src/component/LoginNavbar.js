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

const LoginNavbar = () => {

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
                  
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default LoginNavbar;
