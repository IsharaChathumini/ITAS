import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <Box sx={{
            bgcolor: palette.secondary.darkBlack,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px', // Reduced padding to decrease height
            color: 'white',
        }}>
            <Box sx={{ marginBottom: { xs: '5px', md: '0' } }}> {/* Reduced margin for mobile view */}
                <Typography variant="body1" sx={{ fontSize: '14px' }}>CONTACT US</Typography> {/* Adjusted font size */}
                <Typography variant="body2" sx={{ fontSize: '12px' }}>
                    Faculty of Engineering, Hapugala, Galle, Sri Lanka.
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px' }}>Phone: (+94) 91 2245765/6</Typography>
                <Typography variant="body2" sx={{ fontSize: '12px' }}>Email: webmaster@eng.ruh.ac.lk</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>GET SOCIAL</Typography>
                <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '5px' }}> {/* Reduced gap */}
                    <Link href="https://www.facebook.com" color="inherit" target="_blank">
                        <FacebookIcon fontSize="small" /> {/* Adjusted icon size */}
                    </Link>
                    <Link href="https://www.twitter.com" color="inherit" target="_blank">
                        <TwitterIcon fontSize="small" /> {/* Adjusted icon size */}
                    </Link>
                    <Link href="https://www.linkedin.com" color="inherit" target="_blank">
                        <LinkedInIcon fontSize="small" /> {/* Adjusted icon size */}
                    </Link>
                </Box>
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: { xs: '5px', md: '0' } }}> {/* Reduced margin for mobile view */}
                <Typography variant="body2" sx={{ fontSize: '12px' }}>All rights reserved! 2024.</Typography>
            </Box>
        </Box>
    );
}

export default Footer;
