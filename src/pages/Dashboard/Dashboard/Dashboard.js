import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, useButton } from '@mui/material';
import {
    Link,
    Outlet
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import clsx from 'clsx';
import { styled } from '@mui/system';

const CustomButtonRoot = styled('button')`
  background-color: cadetblue;
  width: 100%;
  padding: 7px 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: darkcyan;

  &:hover {
    background-color: #2a6566;
  }

  &.active {
    background-color: #004386;
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const { children } = props;
    const { active, disabled, focusVisible, getRootProps } = useButton({
        ...props,
        ref,
        component: CustomButtonRoot,
    });

    const classes = {
        active,
        disabled,
        focusVisible,
    };

    return (
        <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
            {children}
        </CustomButtonRoot>
    );
});

CustomButton.propTypes = {
    children: PropTypes.node,
};

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" size="large">
                        Go to home
                    </Button>
                </Link><br />
            </Toolbar>
            <Divider />

            {admin ? <Box>
                <Link to={`/dashboard/manageAllOrders`}><CustomButton >Manage-All-Orders</CustomButton></Link><br />
                <Link to={`/dashboard/ManageProducts`}><CustomButton >Manage-Products</CustomButton></Link><br />
                <Link to={`/dashboard/makeAdmin`}><CustomButton >Make Admin</CustomButton></Link><br />
                <Link to={`/dashboard/addProduct`}><CustomButton >Add Product</CustomButton></Link><br />
            </Box>
                :
                <Box>
                    <Link to={`/dashboard/myOrder`}><CustomButton>My Orders</CustomButton></Link><br />
                    <Link to={`/dashboard/pay`}><CustomButton>Pay</CustomButton></Link><br />
                    <Link to={`/dashboard/addReview`}><CustomButton >Add Review</CustomButton></Link><br />
                </Box>
            }
            <Button style={{ backgroundColor: 'crimson', color: 'white', width: '100%' }} onClick={logOut} color="inherit"><i class="fas fa-sign-out-alt"></i> Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: 'lightseagreen' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth, xs: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
