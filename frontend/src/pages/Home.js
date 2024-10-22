import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Footer from '../component/Footer'; // Adjusted path
import HomeNavbar from '../component/HomeNavbar'; // Import Navbar

const Home = () => {
    const { palette } = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HomeNavbar /> {/* Add Navbar here */}
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    height: 'calc(100vh - 128px)', // Subtract Navbar and Footer heights
                }}
            >
                {/* Left side - Light brown background with text */}
                <Box
                    sx={{
                        flex: '60%',
                        bgcolor: 'linear-gradient(to right, #d3d3d3, #ffffff)', // Grey to white gradient
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: '40px',
                        paddingRight: '40px',
                        color: '#000', // Set text color to black
                    }}
                >
                    <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                        Welcome to the Industrial Training Allocation System
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '20px', color: palette.primary.main }}>
                        Faculty of Engineering, University of Ruhuna
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '30px', maxWidth: '500px' }}>
                        Our system provides a comprehensive solution for allocating industrial training opportunities. 
                        Explore our offerings and find the best fit for your career goals.
                    </Typography>
                    
                </Box>

                {/* Right side - Background image */}
                <Box
                    sx={{
                        flex: '40%',
                        backgroundImage: 'url(https://media.istockphoto.com/id/985481408/photo/portrait-young-beautiful-asian-business-woman-in-formal-suit-in-office.jpg?s=2048x2048&w=is&k=20&c=ynFHzwY6FswINw01axqXT65XrEkzTSMoPPWfV3Fyh10=)',
                        backgroundSize: 'cover', // Ensure the image covers the right side
                        backgroundPosition: 'center', // Center the image
                        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                    }}
                />
            </Box>
            <Footer />
        </Box>
    );
}

export default Home;

