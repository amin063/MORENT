import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../services/userServices';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(null);

    useEffect(() => {
        const checkAuth = async() => {
            const res = await getUser();
            if (!res?.user) {
                navigate('/login', { replace: true });
            } else {
                setIsUser(true);
            }
        };
        checkAuth();
    }, [navigate]);

    if (isUser === null) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
