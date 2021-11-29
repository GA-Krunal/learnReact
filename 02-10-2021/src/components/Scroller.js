import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import FakeData from './FakeData';
import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import ButtonGroup from '@mui/material/ButtonGroup';

const Scroller = () => {
    const [start, setStart] = useState(10)
    const [isPublished, setIsPublished] = useState(true)
    const [end, setEnd] = useState(20)
    const [myArr, setMyArr] = useState(FakeData.slice(0, 10))
    const fetchData = () => {
        setStart(start + 10)
        setEnd(end + 10)
        setTimeout(() => {

            const temp = [...myArr, ...FakeData.slice(start, end)]
            setMyArr(temp)
        }, 1000);
    }
    return (
        <>
            {/* <ButtonGroup variant={isPublished? ""}"outlined" aria-label="outlined primary button group"> */}
                <Button onClick={()=>setIsPublished(true)} variant= {isPublished?"contained" : "outlined"}>published</Button>
                <Button onClick={()=>setIsPublished(false)} variant= {isPublished?"outlined" : "contained"}>draft</Button>
            {/* </ButtonGroup> */}
            <InfiniteScroll
                dataLength={myArr.length}
                // next={fetchData}
                hasMore={myArr.length < FakeData.length ? true : false}
                loader={<Button variant="contained" onClick={fetchData}>Load More</Button>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>coursename</TableCell>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>coursedetails</TableCell>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>buyer</TableCell>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>exam</TableCell>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>price</TableCell>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>lectures</TableCell>
                            <TableCell style={{ backgroundColor: "black", color: "white" }}>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myArr.filter(el=>el.ispublished===isPublished).map((post) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={post.id}>
                                    <TableCell >{post.coursename}</TableCell>
                                    <TableCell >{post.coursedetails}</TableCell>
                                    <TableCell >{post.buyer}</TableCell>
                                    <TableCell >{post.exam}</TableCell>
                                    <TableCell >{post.price}</TableCell>
                                    <TableCell >{post.lectures}</TableCell>
                                    <TableCell ><Button variant="contained">Actions</Button></TableCell>
                                </TableRow>

                            );
                        })}
                    </TableBody>

                </Table>
            </InfiniteScroll>
        </>
    )
}

export default Scroller
