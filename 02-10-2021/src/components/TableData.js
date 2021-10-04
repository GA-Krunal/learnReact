import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

export default function TableData() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                setPosts(res.data);
            })
    }, [])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <h2>Table With Search And Pagination</h2>
            <TextField id="standard-basic" label="search here.." variant="standard" style={{ float: 'left', marginBottom: "10px", marginTop: "5px" }} onChange={(e) => { setSearchTerm(e.target.value) }} />
            <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead >
                            <TableRow>
                                <TableCell style={{ backgroundColor: "black", color: "white" }}>Album id</TableCell>
                                <TableCell style={{ backgroundColor: "black", color: "white" }}>id</TableCell>
                                <TableCell style={{ backgroundColor: "black", color: "white" }}>title</TableCell>
                                <TableCell style={{ backgroundColor: "black", color: "white" }}>url</TableCell>
                                <TableCell style={{ backgroundColor: "black", color: "white" }}>thumbnail url</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.filter((element) => element.title.includes(searchTerm))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((post) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={post.id}>

                                            <TableCell >{post.albumId}</TableCell>
                                            <TableCell >{post.id}</TableCell>
                                            <TableCell >{post.title}</TableCell>
                                            <TableCell ><img src={post.url} alt="unable to load" style={{ height: "20px", width: "20px" }} /></TableCell>
                                            <TableCell ><img src={post.thumbnailUrl} alt="unable to load" style={{ height: "20px", width: "20px" }} /></TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={posts.filter((element) => element.title.includes(searchTerm)).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}

