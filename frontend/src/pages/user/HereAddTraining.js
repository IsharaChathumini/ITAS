import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAddTraining = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to new homepage immediately
        navigate('/new-homepage');
    }, [navigate]);

    return null; // No need to render anything
};

export default UserAddTraining;
