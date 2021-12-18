import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUsers } from '@fortawesome/free-solid-svg-icons'

const DashboardAdminHome = () => {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('https://pacific-coast-31375.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])


    let totalAdmins = [];
    totalAdmins = allUsers.filter(user => user?.role === 'admin');
    const totalUsers = (allUsers.length - totalAdmins.length)
    return (
        <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '10px' }}>
            <Grid item xs={4} sm={4} md={6} style={{ backgroundColor: '#35dcb2', color: 'white', borderRadius: '10px', }}>
                <FontAwesomeIcon icon={faUserShield} style={{ fontSize: '120px' }} />
                <Typography variant="h4" color="text.secondary" sx={{ my: 4, color: 'white', fontWeight: '700' }}>
                    Total Admins: {totalAdmins.length}
                </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={6} style={{ backgroundColor: '#bd3141', color: 'white', borderRadius: '10px' }}>
                <FontAwesomeIcon icon={faUsers} style={{ fontSize: '120px' }} />
                <Typography variant="h4" color="text.secondary" sx={{ my: 4, color: 'white', fontWeight: '700' }}>
                    Total Users: {totalUsers}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default DashboardAdminHome;