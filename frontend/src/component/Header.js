import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import headerImage from '../images/R.jpg';
import SearchInputEl from './SearchinputEl';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: 'column', // Stack elements vertically
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        minHeight: "50vh", // Maintain header height
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover", // Adjust background size
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundColor: theme.palette.secondary.main,
        padding: "0 50px", // Add padding for spacing
    }));

    const Message = styled(Typography)(({ theme }) => ({
        fontSize: '1.5rem', // Size for the message
        fontWeight: 'bold',
        color: 'black', // Set text color to black
        marginBottom: '20px', // Space between message and search bar
        textAlign: 'center', // Center the message text
    }));

    return (
        <StyleHeader>
            <Message variant="h3">
               
            </Message>
            <SearchInputEl />
        </StyleHeader>
    );
}

export default Header;
