import * as React from 'react';
import { DataGridPro, GridOverlay } from '@mui/x-data-grid-pro';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import FakeData from './FakeData'

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export default function MuiDataGrid() {
  const [loading, setLoading] = React.useState(false);   //in case we have to show loading
  const [loadedRows, setLoadedRows] = React.useState([]);
  // const mounted = React.useRef(true);
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 20,
  //   maxColumns: 6,
  // });
  // const rows = FakeData;
  const columns = [{ field: 'id', headerName: 'Id' },
  { field: 'coursename', headerName: 'Coursename' },
  { field: 'coursedetails', headerName: 'Coursedetails' },
  { field: 'buyer', headerName: 'Buyer' },
  { field: 'exam', headerName: 'Exam' },
  { field: 'price', headerName: 'Price' },
  { field: 'lectures', headerName: 'Lectures' },
  { field: 'ispublished', headerName: 'Action' },
  ]
  const publishedRows = FakeData.filter(el => el.ispublished === true)
  const draftRows = FakeData.filter(el => el.ispublished !== true)
  const [publishedData, setPublishedData] = React.useState({ columns: columns, rows: publishedRows.slice(0, 10) })
  const [draftData, setDraftData] = React.useState({ columns: columns, rows: draftRows.slice(0, 10) })
  // const draftData = { columns: columns, rows: draftRows.slice(0, 10) };
  const [pstart, setPstart] = React.useState(10)
  const [pend, setPend] = React.useState(15)
  const [dstart, setdStart] = React.useState(10)
  const [dend, setdEnd] = React.useState(15)
  const [isPublished, setIsPublished] = React.useState(true)
  const [displayData, setDisplayData] = React.useState({ columns: columns, rows: publishedRows.slice(0, 10) })
  const MAX_ROW_LENGTH = isPublished ? publishedRows.length : draftRows.length;
  // const [maxlength, setmaxlength] = useState(draftRows.length)

  const loadServerRows = (newRowLength) => {
    // setLoading(true);
    if (isPublished === true) {
      const newData = { columns: columns, rows: publishedRows.slice(pstart, pend) }
      setLoadedRows(loadedRows.concat(newData.rows));
      setPstart(pstart + newRowLength)
      setPend(pend + newRowLength)
      setDisplayData({ columns: columns, rows: publishedRows.slice(0, 10) })
    }
    else {
      const newData = { columns: columns, rows: draftRows.slice(dstart, dend) }
      setLoadedRows(loadedRows.concat(newData.rows));
      setdStart(dstart + newRowLength)
      setdEnd(dend + newRowLength)
      setDisplayData({ columns: columns, rows: draftRows.slice(0, 10) })
    }
  };
  const handlePublished = () => {
    setIsPublished(true)
    setDisplayData({ columns: columns, rows: publishedRows.slice(0, 10) })
    setLoadedRows([])
    setPstart(10)
    setPend(15)
  }
  const handleDraft = () => {
    setIsPublished(false)
    setDisplayData({ columns: columns, rows: draftRows.slice(0, 10) })
    setLoadedRows([])
    setdStart(10)
    setdEnd(15)
  }
  const handleOnRowsScrollEnd = (params) => {
    if (loadedRows.length <= MAX_ROW_LENGTH) {
      loadServerRows(params);
    }
  };
  return (
    <>
      <Button onClick={handlePublished} variant={isPublished ? "contained" : "outlined"}>PUBLISHED</Button>
      <Button onClick={handleDraft} variant={isPublished ? "outlined" : "contained"}>DRAFT</Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGridPro
          {...displayData}
          rows={displayData.rows.concat(loadedRows)}
          loading={loading}
          hideFooterPagination
          // onRowsScrollEnd={handleOnRowsScrollEnd}
          components={{
            LoadingOverlay: CustomLoadingOverlay,
          }}
        />
        <Button onClick={() => handleOnRowsScrollEnd(5)} color="secondary" variant="contained">LOAD MORE</Button>
      </div>
    </>
  );
}
