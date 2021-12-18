// import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar variant="dark" fixed="top" sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: 'royalblue' }}>
                <Container>
                    <Navbar.Brand to="/home#home" className="text-white">
                        <img src="https://i.ibb.co/Pzf2DTs/52239.png" width="15%" className="inline-block" alt="" />OP-Restaurant
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                        <Nav.Link as={Link} to="/allProduct" className="text-white">All Product</Nav.Link>
                        {user?.email ?
                            <Nav>
                                <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                            </Nav>
                            :
                            <Nav.Link style={{ border: 'none', borderRadius: '20px', padding: '5px 10px', marginLeft: '5px', backgroundColor: 'white', color: 'royalblue' }} as={Link} to="/login"><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                        }
                        {user?.email && <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                            <Button style={{ border: 'none', borderRadius: '20px', padding: '5px 10px', marginLeft: '5px', backgroundColor: 'white', color: 'royalblue' }} onClick={logOut} variant="light"><i class="fas fa-sign-out-alt"></i> Logout</Button>
                        </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;