import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { trainingLoadAction,deleteSingleTrainingAction } from '../../redux/actions/trainingAction';

const DashTrainings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trainingLoadAction());
    }, [dispatch]);

    const { success: deleteSuccess } = useSelector(state => state.deleteTraining);

    const { trainings, loading } = useSelector((state) => state.loadTraining);
    let data = [];
    data = trainings !== undefined && trainings.length > 0 ? trainings : [];

    //delete training by Id
    const deleteTrainingById = (e, id) => {
        if (window.confirm(`You really want to delete product ID: "${id}" ?`)) {
            dispatch(deleteSingleTrainingAction(id));
            if (deleteSuccess && deleteSuccess === true) {
                dispatch(trainingLoadAction())
            }
        }
    };

    const columns = [
        {
            field: '_id',
            headerName: 'Training ID',
            width: 150,
            editable: true,
        },
        {
            field: 'title',
            headerName: 'Training name',
            width: 150,
        },
        {
            field: 'trainingType',
            headerName: 'Category',
            width: 150,
            valueGetter: (params) => params.row?.trainingType?.trainingTypeName || 'N/A',
        },
        /*{
            field: 'User',
            headerName: 'User',
            width: 150,
            valueGetter: (params) => params.row ? params.row.User?.firstName || 'N/A' : 'N/A',
        },*/
        {
            field: 'available',
            headerName: 'Available',
            width: 150,
            renderCell: (params) => params.row?.available ? 'Yes' : 'No',
        },
        {
            field: 'salary',
            headerName: 'Salary',
            type: 'number',
            width: 150,
            renderCell: (params) => params.row ? `$${params.row.salary}` : 'N/A',
        },
        {
            field: 'Actions',
            width: 200,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
                    <Button variant="contained">
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={`/admin/edit/training/${params.row._id}`}>
                            Edit
                        </Link>
                    </Button>
                    <Button onClick={(e) => deleteTrainingById(e, params.row._id)} variant="contained" color="error">
                        Delete
                    </Button>
                </Box>
            ),
        },
    ];
    

    return (
        <Box>
            <Typography variant="h4" sx={{ color: 'black', pb: 3, fontWeight: 'bold' }}>
                Trainings list
            </Typography>
            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
                <Button variant="contained" color="success" startIcon={<AddIcon />}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/admin/training/create">
                        Create Training
                    </Link>
                </Button>
            </Box>
            <Paper sx={{ bgcolor: '#8d6e63' }}>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{
                            '& .MuiTablePagination-displayedRows': {
                                color: 'black',
                            },
                            color: 'black',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) => theme.palette.secondary.main,
                            },
                            button: {
                                color: '#ffffff',
                            },
                        }}
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default DashTrainings;
