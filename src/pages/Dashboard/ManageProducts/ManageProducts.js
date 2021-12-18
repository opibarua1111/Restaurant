import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';

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

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://pacific-coast-31375.herokuapp.com/foods")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //Delete Order
    const handleDeleteProducts = id => {
        const url = `https://pacific-coast-31375.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remaingPurchaseOrders = products?.filter(order => order._id !== id);
                    setProducts(remaingPurchaseOrders);
                }
            })
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product Name</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <StyledTableRow key={product._id}>
                            <StyledTableCell align="center">{product.name}</StyledTableCell>
                            <StyledTableCell align="center">{product.price}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button style={{ border: 'none', color: 'white' }} className="btn btn-danger mt-2" onClick={() => handleDeleteProducts(product._id)} >Delete</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageProducts;