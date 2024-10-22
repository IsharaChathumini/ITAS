import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from "react-google-charts";
import { data, options } from './data/data'
import ChartComponent from '../../component/ChartComponent';


const AdminDashboard = () => {
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "black", pb: 3, fontWeight: 'bold' }}>
                    Dashboard
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value="535"
                        icon={<SupervisorAccountIcon sx={{ color: "White", fontSize: 30 }} />}
                        description="Users"
                        money=''
                    />
                    <StatComponent
                        value="100"
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Trainings"
                        money=''
                    />
                    <StatComponent
                        value="5"
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Trainings categories"
                        money=''
                    />

                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <ChartComponent>
                        <Chart
                            chartType="Bar"
                            data={data}
                            options={options}
                            width="100%"
                            height="300px"
                            legendToggle
                        />
                    </ChartComponent>
                </Stack>

            </Box>
        </>
    )
}

export default AdminDashboard
