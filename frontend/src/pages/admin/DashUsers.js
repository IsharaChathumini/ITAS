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

    const deleteUserById = (e, id) => {
        console.log(id);
    };

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
     
        {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button variant="contained">
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>
                            Edit
                        </Link>
                    </Button>
                    <Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">
                        Delete
                    </Button>
                </Box>
            ),
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
                        }}
                        getRowId={(row) => row._id}
                        rows={data}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                        slots={{ toolbar: GridToolbar }}
                    />
                </Box>
            </Paper>
        </Box>
    );
}


export default DashUsers;
