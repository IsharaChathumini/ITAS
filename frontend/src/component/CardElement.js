import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete Icon

const CardElement = ({ trainingTitle, description, location, salary, id, onDelete }) => {
    const { palette } = useTheme();

    // Fallback for missing description
    const safeDescription = description || "No description available.";

    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {trainingTitle}
                </Typography>
                
                <Typography variant="body2" sx={{ mt: 1.5 }}>
                    Description: {safeDescription}
                </Typography>

                <Typography sx={{ mt: 1.5, color: "black" }}>
                    Salary: ${salary}
                </Typography>

                {/* Location moved to the bottom with consistent spacing */}
                <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500, mt: 1.5 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {location}
                </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'flex-end' }}> {/* Align Delete button to the right */}
                <Button
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDelete(id)}  // Handle delete click
                    sx={{ 
                        backgroundColor: '#8B0000', // Dark red background for the button
                        color: 'white', // White text color
                        '&:hover': {
                            backgroundColor: '#B22222' // Slightly lighter red on hover
                        }
                    }}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardElement;
