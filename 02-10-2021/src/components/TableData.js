// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useState } from 'react';
// import FakeData from './FakeData';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Button from '@mui/material/Button';

// const columns = [
//   { field: 'coursename', headerName: 'courseName', width: 70 },
//   { field: 'coursedetails', headerName: 'courseDetails', width: 130 },
//   { field: 'buyer', headerName: 'Buyer', width: 130 },
//   { field: 'exam', headerName: 'Buyer', width: 130 },
//   { field: 'price', headerName: 'Price', width: 130 },
//   { field: 'lectures', headerName: 'Lectures', width: 130 },
//   { field: 'actions', headerName: 'Actions', width: 130 },
// ];

// export default function TableData() {
//     const [start, setStart] = useState(10)
//     const [isPublished, setIsPublished] = useState(true)
//     const [end, setEnd] = useState(20)
//     const [myArr, setMyArr] = useState(FakeData.slice(0, 20))
//     // .filter(el=>el.ispublished===isPublished)
//     // const rows = myArr.filter(el=>el.ispublished===isPublished)
//     const fetchData = () => {
//         setStart(start + 10)
//         setEnd(end + 10)
//         setTimeout(() => {

//             const temp = [...myArr, ...FakeData.slice(start, end)]
//             setMyArr(temp.filter(el=>el.ispublished===isPublished))
//         }, 1000);
//     }
//   return (
//     // <div style={{ height: "800px", width: '100%' }}>
//      <InfiniteScroll
//                 dataLength={FakeData.length}
//                 // next={fetchData}
//                 hasMore={myArr.length < FakeData.length ? true : false}
//                 loader={<Button variant="contained" onClick={fetchData}>Load More</Button>}
//                 endMessage={
//                     <p style={{ textAlign: 'center' }}>
//                         <b>Yay! You have seen it all</b>
//                     </p>
//                 }
//             >
//       <DataGrid
//         rows={FakeData}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//          </InfiniteScroll>
//     // </div>
//   );
// }
