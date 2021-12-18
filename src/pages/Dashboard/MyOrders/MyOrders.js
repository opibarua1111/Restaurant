import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([]);
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('https://pacific-coast-31375.herokuapp.com/purchase/byEmail', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(orders => {
                setMyOrders(orders);
            })
    }, [user.email])


    useEffect(() => {
        fetch('https://pacific-coast-31375.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //Delete Order
    const handleDeleteOrder = id => {
        const url = `https://pacific-coast-31375.herokuapp.com/purchases/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainingOrders = orders.filter(user => user._id !== id);
                    setOrders(remainingOrders);
                }
            })
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product name</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">City</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myOrders.map((myOrder) => (
                        <StyledTableRow key={myOrder._id}>
                            <StyledTableCell component="th" scope="row">
                                {myOrder.title}
                            </StyledTableCell>
                            <StyledTableCell align="right">{myOrder.name}</StyledTableCell>
                            <StyledTableCell align="right">{myOrder.email}</StyledTableCell>
                            <StyledTableCell align="right">{myOrder.city}</StyledTableCell>
                            <StyledTableCell align="right">{myOrder.phone}</StyledTableCell>
                            <StyledTableCell align="right">{myOrder.status}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Nav className="text-center cursor-pointer" onClick={() => handleDeleteOrder(myOrder._id)}>Delete</Nav>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrders;