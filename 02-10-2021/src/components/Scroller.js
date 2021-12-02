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
// import ButtonGroup from '@mui/material/ButtonGroup';

const Scroller = () => {
    const [pstart, setpStart] = useState(5)
    const [dstart, setdStart] = useState(5)
    const [isPublished, setIsPublished] = useState(true)
    const [pend, setpEnd] = useState(10)
    const [dend, setdEnd] = useState(10)
    // const [data, setData] = useState(FakeData)
    const [publishedArr, setPublishedArr] = useState(FakeData.filter(el=>el.ispublished===isPublished).slice(0 ,5))
    const [draftArr, setDraftArr] = useState(FakeData.filter(el=>el.ispublished!==isPublished).slice(0 ,5))
    const [displayArr, setDisplayArr] = useState(publishedArr)

    console.log(publishedArr , "published array")
    console.log(draftArr , "draft wala array")
    console.log(displayArr , "display hone wala array")
    const fetchData = () => {
        console.log(pstart , "pstart")
        if(isPublished ===true){
            // setTimeout(() => {
                
                setpStart(pstart=>pstart+5)
                setpEnd(pend=>pend+5)
                setDisplayArr(publishedArr)
                const temp = [...publishedArr , ...FakeData.filter(el=>el.ispublished===true).slice(pstart ,pend) ]
                setPublishedArr(temp)
            // }, 2000);
        }
        else{
            // setTimeout(() => {
                setdStart(dstart+5)
                setdEnd(dend+5)
                const temp = [...draftArr , ...FakeData.filter(el=>el.ispublished!==true).slice(dstart ,dend) ]
                setDraftArr(temp)
                setDisplayArr(draftArr)
                
            // }, 2000);
        }
    }
    const handlePublished = ()=>  {
        setIsPublished(true) 
        setDisplayArr(publishedArr)
    }
    const handleDraft = ()=>{
        setIsPublished(false) 
        setDisplayArr(draftArr)
    }
     return (
        <>
            {/* <ButtonGroup variant={isPublished? ""}"outlined" aria-label="outlined primary button group"> */}
                <Button onClick={handlePublished } variant= {isPublished?"contained" : "outlined"}>published</Button>
               <Button onClick={handleDraft} variant= {isPublished?"outlined" : "contained"}>draft</Button>
            {/* </ButtonGroup> */}
            <InfiniteScroll
                dataLength={publishedArr.length}
                // next={fetchData}
                hasMore={publishedArr.length < FakeData.length ? true : false}
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
                        {displayArr.map((post) => {
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
