import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction } from '../../redux/actions/userAction';

const DashUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUserAction());
    }, [dispatch]);

    const { users, loading } = useSelector(state => state.allUsers);
    let data = (users !== undefined && users.length > 0) ? users : [];

    // Process data to include last 3 trainings as separate columns
    const processedData = data.map(user => {
        const trainings = user.trainingHistory || [];
        const last3Trainings = trainings.slice(0, 3);
        
        // Create training columns data
        const trainingData = {};
        for (let i = 0; i < 3; i++) {
            const training = last3Trainings[i] || {};
            trainingData[`training${i + 1}Title`] = training.title || '-';
            trainingData[`training${i + 1}Location`] = training.location || '-';
            trainingData[`training${i + 1}Status`] = training.applicationStatus || '-';
            trainingData[`training${i + 1}Date`] = training.createdAt ? 
                moment(training.createdAt).format('YYYY-MM-DD') : '-';
        }

        return {
            ...user,
            ...trainingData
        };
    });

    const columns = [
        {
            field: '_id',
            headerName: 'User ID',
            width: 150,
            editable: true,
        },
        {
            field: 'studentmail',
            headerName: 'Student Mail',
            width: 150,
        },
        {
            field: 'role',
            headerName: 'User Status',
            width: 150,
            renderCell: (params) => (
                params.row.role === 1 ? "Admin" : "Regular User"
            ),
        },
        {
            field: 'createdAt',
            headerName: 'Creation Date',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('YYYY-MM-DD HH:mm:ss')
            ),
        },
        // Training 1
        {
            field: 'training1Title',
            headerName: 'Training 1',
            width: 200,
            renderCell: (params) => (
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 0.5,
                    padding: '8px 0'
                }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {params.row.training1Title}
                    </Typography>
                    <Typography variant="caption">
                        {params.row.training1Location}
                    </Typography>
                    <Typography variant="caption" sx={{
                        bgcolor: params.row.training1Status === 'pending' ? 'warning.light' : 'success.light',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        display: 'inline-block'
                    }}>
                        {params.row.training1Status}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {params.row.training1Date}
                    </Typography>
                </Box>
            )
        },
        // Training 2
        {
            field: 'training2Title',
            headerName: 'Training 2',
            width: 200,
            renderCell: (params) => (
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 0.5,
                    padding: '8px 0'
                }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {params.row.training2Title}
                    </Typography>
                    <Typography variant="caption">
                        {params.row.training2Location}
                    </Typography>
                    <Typography variant="caption" sx={{
                        bgcolor: params.row.training2Status === 'pending' ? 'warning.light' : 'success.light',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        display: 'inline-block'
                    }}>
                        {params.row.training2Status}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {params.row.training2Date}
                    </Typography>
                </Box>
            )
        },
        // Training 3
        {
            field: 'training3Title',
            headerName: 'Training 3',
            width: 200,
            renderCell: (params) => (
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 0.5,
                    padding: '8px 0'
                }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {params.row.training3Title}
                    </Typography>
                    <Typography variant="caption">
                        {params.row.training3Location}
                    </Typography>
                    <Typography variant="caption" sx={{
                        bgcolor: params.row.training3Status === 'pending' ? 'warning.light' : 'success.light',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        display: 'inline-block'
                    }}>
                        {params.row.training3Status}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {params.row.training3Date}
                    </Typography>
                </Box>
            )
        },
    ];

    return (
        <Box>
            <Typography variant="h4" sx={{ color: "black", pb: 3, fontWeight: 'bold' }}>
                All Users
            </Typography>
            <Paper sx={{ bgcolor: '#8d6e63' }}>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        sx={{
                            '& .MuiTablePagination-displayedRows': {
                                color: 'black',
                            },
                            color: 'black',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) => theme.palette.secondary.main,
                            },
                            '& .MuiDataGrid-cell': {
                                whiteSpace: 'normal',
                                multiline: true,
                            },
                            '& .MuiDataGrid-row': {
                                maxHeight: 'none !important',
                            },
                            '& .MuiDataGrid-cell:focus': {
                                outline: 'none',
                            },
                        }}
                        getRowId={(row) => row._id}
                        rows={processedData}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                        slots={{ toolbar: GridToolbar }}
                        getRowHeight={() => 'auto'}
                    />
                </Box>
            </Paper>
        </Box>
    );
}

export default DashUsers;