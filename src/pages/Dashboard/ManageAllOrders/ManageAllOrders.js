import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';

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

const ManageAllOrders = () => {
    const [purchaseProducts, setPurchaseProducts] = useState([]);
    useEffect(() => {
        fetch("https://pacific-coast-31375.herokuapp.com/purchases")
            .then(res => res.json())
            .then(data => setPurchaseProducts(data))
    }, [])

    // Status Update
    const handleStatus = id => {
        const status = "Shipped";

        const url = `https://pacific-coast-31375.herokuapp.com/purchase/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Ordered Shipped Successfully");
                }
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product Name</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Phone</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {purchaseProducts.map((purchaseProduct) => (
                        <StyledTableRow key={purchaseProduct._id}>
                            <StyledTableCell align="center">{purchaseProduct.title}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.name}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.email}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.address}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.phone}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.status}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className="d-flex justify-content-around">
                                    <button className="btn btn-success mt-2" style={{ color: 'white' }} value="Shipped" onClick={() => handleStatus(purchaseProduct._id)} >Shipped</button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;