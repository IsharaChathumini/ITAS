import React, { useEffect, useState } from 'react'
import LandNavbar from '../component/LandNavbar'
import Header from '../component/Header'
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { trainingLoadAction } from '../redux/actions/trainingAction'
import { trainingTypeLoadAction } from '../redux/actions/trainingTypeAction'
import SelectComponent from '../component/selectComponent';
import LoadingBox from '../component/LoadingBox'
import CardElementFront from '../component/CardElementFront'
import Footer from '../component/Footer'
import LocationOnIcon from '@mui/icons-material/LocationOn';



const LandingPage = () => {
    const { trainings, setUniqueLocation, pages, loading } = useSelector(state => state.loadTraining);
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { keyword, location } = useParams();
    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');


    useEffect(() => {
        dispatch(trainingLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);

    useEffect(() => {
        dispatch(trainingTypeLoadAction());
    }, []);

    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }

    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>

                <LandNavbar />
                <Header />
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Box sx={{ flex: 2, p: 2 }}>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter Trainings by category
                                    </Typography>


                                </Box>

                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />


                            </Card>

                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    {/* <h4>Filter by category</h4> */}
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter training by location
                                    </Typography>
                                    <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                        <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    <Link to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>

                                            ))
                                        }

                                    </MenuList>

                                </Box>
                            </Card>

                        </Box>
                        <Box sx={{ flex: 5, p: 2 }}>
                            {
                                loading ?
                                    <LoadingBox /> :
                                    trainings && trainings.length === 0 ?
                                        <>
                                            <Box
                                                sx={{
                                                    minHeight: '350px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>

                                                <h2>No result found!</h2>
                                            </Box>
                                        </> :

                                        trainings && trainings.map((training, i) => (
                                            <CardElementFront
                                                key={i}
                                                id={training._id}
                                                trainingTitle={training.title}
                                                description={training.description}
                                                category={training.trainingType ? training.trainingType.trainingTypeName : "No category"}
                                                location={training.location}
                                            />
                                        ))
                            }
                            <Stack spacing={2} >
                                <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                            </Stack>
                        </Box>
                    </Stack>

                </Container>


            </Box>


           

            



        </>
    )
}

export default LandingPage
