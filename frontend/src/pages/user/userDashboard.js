import { Typography, Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import StatComponent from '../../component/StatComponent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector } from 'react-redux'
import moment from 'moment';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    return (
        <>
            <Box >

                <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  

                    <StatComponent
                        value={user && moment(user.createdAt).format('YYYY / MM / DD')}
                        icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Member since"
                        money=''
                    />
                    <StatComponent
                        value={user && user.trainingHistory.length}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Number of Trainings"
                        money=''
                    />


                </Stack>
            </Box>

     
            <Button variant="contained" size="medium" sx={{ position: 'fixed', bottom: 16, right: 16 }}><Link style={{ textDecoration: "none", color: "white", boxShadow: 0 }} to={`/user/dashboard`}>Back</Link>
  
</Button>


                            

        </>
    )
}

export default UserDashboard