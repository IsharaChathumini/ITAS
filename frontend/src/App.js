import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/Login';
import userDashboard from './pages/user/userDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserTrainingHistory from './pages/user/UserTrainingHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleTraining from './pages/SingleTraining';
import DashUsers from './pages/admin/DashUsers';
import DashTrainings from './pages/admin/DashTrainings';
import DashCategory from './pages/admin/DashCategory';
//import DashCreatetraining from './pages/admin/DashCreateTraining';
import DashCreateCategory from './pages/admin/DashCreateCategory';
import DashEditTraining from './pages/admin/DashEditTraining';
import DashCreateTraining from './pages/admin/DashCreateTraining';
import Register from './pages/Register';
import HereAddTraining from './pages/user/HereAddTraining';
import LandingPage from './pages/LandingPage';
import FinalList from './pages/admin/FinalList';

//HOC
const UserDashboardHOC = Layout(userDashboard);
const UserTrainingHistoryHOC = Layout(UserTrainingHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashTrainingsHOC = Layout(DashTrainings);
const DashCategoryHOC = Layout(DashCategory)
const DashCreateTrainingHOC = Layout(DashCreateTraining)
const DashCreateCategoryHOC = Layout(DashCreateCategory)
const DashAdminEditTrainingHOC = Layout(DashEditTraining);
const FinalListHOC = Layout(FinalList);

const App = () => {

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/new-homepage' element={<LandingPage />} /> 
                        <Route path='/' element={<Home />} />
                        <Route path='/search/location/:location' element={<LandingPage />} />
                        <Route path='/search/:keyword' element={<LandingPage  />} />
                        <Route path='/login' element={<LogIn />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/training/:id' element={<SingleTraining />} />
                        <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
                        <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
                        <Route path='/admin/finallist' element={<AdminRoute><FinalListHOC /></AdminRoute>} />
                        <Route path='/admin/trainings' element={<AdminRoute><DashTrainingsHOC /></AdminRoute>} />
                        <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
                        <Route path='/admin/training/create' element={<AdminRoute><DashCreateTrainingHOC /></AdminRoute>} />
                        <Route path='/admin/edit/training/:id' element={<AdminRoute><DashAdminEditTrainingHOC /></AdminRoute>} />
                        <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
                        <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                        <Route path='/user/trainings' element={<UserRoute>< UserTrainingHistoryHOC /></UserRoute>} />
                        <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                        <Route path='/user/add-training' element={<UserRoute><HereAddTraining /></UserRoute>} />
                    </Routes>
                </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App