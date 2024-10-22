import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { trainingTypeLoadAction } from '../../redux/actions/trainingTypeAction';
import { registerAtrainingAction } from '../../redux/actions/trainingAction';


const validationSchema = yup.object({
    title: yup
        .string('Enter a training title')
        .required('title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    salary: yup
        .number('Enter a salary')
        .required('Salary is required'),
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    trainingType: yup
        .string('Enter a Category')
        .required('Category is required'),
});


const DashCreateTraining = () => {
    const dispatch = useDispatch();

    //training type
    useEffect(() => {
        dispatch(trainingTypeLoadAction());
    }, []);

    const { trainingType } = useSelector(state => state.trainingTypeAll);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            trainingType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAtrainingAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });



    return (
        <>

            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Register a Training
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="title"
                            label="Title"
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="salary"
                            name="salary"
                            label="Salary"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Salary"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />

                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            className="px-2 my-2"
                            variant="outlined"
                            name="trainingType"
                            id="trainingType"
                            select
                            label="Category"
                            value={formik.values.trainingType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.trainingType && Boolean(formik.errors.trainingType)}
                            helperText={formik.touched.trainingType && formik.errors.trainingType}
                        >
                            <MenuItem key={""} value={""}>

                            </MenuItem>

                            {trainingType && trainingType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.trainingTypeName}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button fullWidth variant="contained" type='submit' >Create training</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default DashCreateTraining