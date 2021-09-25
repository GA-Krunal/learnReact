import {  TextField, Button} from '@material-ui/core';
import './App.css';
import { useState } from 'react';
import Qty from "js-quantities";
import SelectUnit from './components/SelectUnit';

function App() {

  const [value, setValue] = useState(0);
  const [unit1, setUnit1] = useState("");
  const [unit2, setUnit2] = useState("");
  const [output, setOutput] = useState("");

  const handleChange1 = (event) => {
    event.preventDefault()
    setUnit1(event.target.value)
  };
  const handleChange2 = (event) => {
    setUnit2(event.target.value)
  };
  const getData = (e) => {
    setValue(e.target.value);
  }
  const calculate = () => {
    if (unit1 !== "" && unit2 !== "" && value !== 0) {
      const qty = new Qty(value + unit1);
      const result = qty.format(unit2)
      setOutput(`${value}${unit1} is equal to ${result}`)
    } else {
      setOutput("please select or fill every input to see results");
    }
  }
  return (
    <>
      <div className="App">
        <div className="header">
          <h2>Unit converter</h2>
        </div>
        <TextField
          id="outlined-number"
          label="Enter Number Here"
          type="number"
          variant="outlined"
          onChange={getData}
        />
        <div className="dropdown">
          <SelectUnit name="From" unit={unit1} handleChange={handleChange1} />
          <div className="temp">
            <SelectUnit name="To" unit={unit2} handleChange={handleChange2} />
          </div>
        </div>
        <div className="but">
          <Button variant="contained" color="primary" onClick={calculate} >Convert</Button>
        </div>
        <h2>{output}</h2>
      </div>
    </>
  );
}

export default App;
