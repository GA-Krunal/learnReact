import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import Form from './components/Form';

function App() {

  const [data, setData] = useState([])
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  let res = /^[a-zA-Z]+$/;
  const columns = [
    { title: "FirstName", field: "firstName" },
    { title: "LastName", field: "lastName" },
  ]
  const updatefName = (event) => {
    setfName(event.target.value);
  }
  const updatelName = (event) => {
    setlName(event.target.value);
  }
  const updateItems = (e) => {
    e.preventDefault();
    if (res.test(fName) && res.test(lName)) {

      const obj = { firstName: fName, lastName: lName }
      let val = [...data, obj]
      setData(val);
      console.log(data, "data")
      setfName("");
      setlName("");

    }
    else {
      alert("invalid input");
    }
  }
  return (
    <div className="App">
      <Form updateItems={updateItems} fName={fName} lName={lName} updatefName={updatefName} updatelName={updatelName} />
      <div className="container">
        <MaterialTable
          data={data}
          columns={columns}
          editable={{
            onRowDelete: selectedRow => new Promise((resolve) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data]
              updatedRows.splice(index, 1)
              setData(updatedRows)
              resolve()
            }),
            onRowUpdate: (updatedRow, oldRow) => new Promise((resolve) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data]
              if (res.test(updatedRow.firstName) && res.test(updatedRow.lastName)) {
                updatedRows[index] = updatedRow
                setData(updatedRows)
                resolve()
              }
              else {
                resolve()
                alert("invalid input: try again")
              }
            })

          }}
          options={{
            actionsColumnIndex: -1, addRowPosition: "first",
            showTitle: false,
            pageSizeOptions: [2, 5, 8],

          }}
        />
      </div>
    </div>
  );
}

export default App;