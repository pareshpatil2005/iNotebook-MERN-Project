import React, { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {
    const { alert } = useContext(AlertContext);
    if (!alert.message) return null;

    return (
        <div className={`fixed-alert alert alert-${alert.type} alert-dismissible fade show text-center`} role="alert">
            {alert.message}
        </div>
    );
};

export default Alert;