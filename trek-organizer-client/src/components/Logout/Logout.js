import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();
    const { addNotification } = useNotificationContext();
    useEffect(() => {
        logout()
        addNotification('You sign out successfully!', types.success);
        navigate('/')
            
    }, [logout, navigate, addNotification]);

    return null;
}

export default Logout;