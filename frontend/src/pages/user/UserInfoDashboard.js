import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const UserInfoDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
                <Card sx={{ minWidth: 275, bgcolor: palette.secondary.darkbrown}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="black" gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "black" }} >
                            First name: {user && user.firstName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black" }} >
                            Last name: {user && user.lastName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black" }} >
                            Student-mail:  {user && user.studentmail}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "grey", pt: 2 }} color="text.secondary">
                            Status: {user && user.role === 0 ? "Regular user" : "Admin"}
                        </Typography>

                    </CardContent>
                </Card>
            </Box>
                

            <Button variant="contained" size="medium" sx={{ position: 'fixed', bottom: 16, right: 16 }}><Link style={{ textDecoration: "none", color: "white", boxShadow: 0 }} to={`/user/dashboard`}>Back</Link>
  
</Button>
        </>
    )
}

export default UserInfoDashboard