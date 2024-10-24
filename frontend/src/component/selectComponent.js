import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

const SelectComponent = ({ handleChangeCategory, cat }) => {

    const { trainingType } = useSelector(state => state.trainingTypeAll);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cat}
                    label="Category"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value="">All</MenuItem>
                    {
                        trainingType && trainingType.map(jt => (
                            <MenuItem key={jt._id} value={jt._id}>{jt.trainingTypeName}</MenuItem>
                        ))
                    }


                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectComponent;
