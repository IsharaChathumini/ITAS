import { Card, CardContent, Stack, Typography, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../component/Footer';
import LoadingBox from '../component/LoadingBox';
import Navbar from '../component/Navbar';
import { trainingLoadSingleAction } from '../redux/actions/trainingAction';
import { userApplyTrainingAction } from '../redux/actions/userAction';
import { Link } from 'react-router-dom';

const SingleTraining = () => {
    const dispatch = useDispatch();
    const { singleTraining, loading } = useSelector(state => state.singleTraining);
    const { id } = useParams();

    useEffect(() => {
        dispatch(trainingLoadSingleAction(id));
    }, [id, dispatch]);

    const applyForATraining = () => {
        dispatch(userApplyTrainingAction({
            title: singleTraining?.title,
            description: singleTraining?.description,
            salary: singleTraining?.salary,
            location: singleTraining?.location,
            trainingType: singleTraining?.trainingType?._id, // Pass the ID for the trainingType
        }));
    };

    return (
        <Box sx={{ bgcolor: "#fafafa" }}>
            <Navbar />
            <Box sx={{ height: '85vh' }}>
                <Container sx={{ pt: '30px' }}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 4, p: 2 }}>
                            {
                                loading ? <LoadingBox /> :
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h5" component="h3">
                                                {singleTraining?.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Box component="span" sx={{ fontWeight: 700 }}>Salary</Box>: ${singleTraining?.salary}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Box component="span" sx={{ fontWeight: 700 }}>Category</Box>: {singleTraining?.trainingType?.trainingTypeName}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Box component="span" sx={{ fontWeight: 700 }}>Location</Box>: {singleTraining?.location}
                                            </Typography>
                                            <Typography variant="body2" sx={{ pt: 2 }}>
                                                {singleTraining?.description}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                                            <Button sx={{ fontSize: "13px" }} variant='contained'>Upload Your CV</Button>
                                        </Box> {/* Button positioned to the right */}
                                    </Card>
                            }
                        </Box>
                        <Box sx={{ flex: 1, p: 2 }}>
                            <Card sx={{ p: 2 }}>
                                <Button onClick={applyForATraining} sx={{ fontSize: "13px", mb: 2 }} variant='contained'>Apply for this Training</Button>
                            </Card>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Button variant="contained" size="medium" sx={{ position: 'fixed', bottom: 100, right: 200 }}>
                <Link style={{ textDecoration: "none", color: "white", boxShadow: 0 }} to={`/new-homepage`}>Back</Link>
            </Button>
            <Footer />
        </Box>
    );
}

export default SingleTraining;
