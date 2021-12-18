import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrders from '../../MyOrders/MyOrders';
import DashboardAdminHome from '../DashboardAdminHome/DashboardAdminHome';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <div>
            {admin ?
                <DashboardAdminHome></DashboardAdminHome>
                :
                <MyOrders></MyOrders>
            }
        </div>
    );
};

export default DashboardHome;