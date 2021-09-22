import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [text, setText] = useState([]);
  const [result, setResult] = useState("");

  const addToText = (val) => {

    let myArr = ["+", "-", "*", "/", ".", "^", "%"]
    console.log(text[text.length - 1], "last element")
    console.log(val, "new element")
    if (myArr.includes(text[text.length - 1]) && myArr.includes(val) && text[text.length - 1] !== "%") {
      console.log("duplicate operator not allowed")
    }
    else {
      setText((text) => [...text, val]);
    }
  }
  const resetInput = () => {
    setText("");
    setResult("");
  }
  const evalPercentage = (ip, index1, index2) => {
    if (index1 !== 0) {
      index1 = index1 + 1;
    }
    let str = ip.slice(index1, index2)
    let rmvStr = ip.slice(index1, index2 + 1)
    let x = Number(str) / 100;
    return ip.replace(rmvStr, x);
  }
  const calculateResult = () => {
    try {
      let input = text.join("").replace("^", "**");
      while (input.includes("%")) {
        let a = 0
        for (let i = 0; i < input.indexOf("%"); i++) {
          if (input.charAt(i) === "-" || input.charAt(i) === "+" || input.charAt(i) === "%" || input.charAt(i) === "*" || input.charAt(i) === "/") {
            a = i;
          }
        }
        input = evalPercentage(input, a, input.indexOf("%"))
      }
      setResult(eval(input))
    } catch (err) {
      setResult("Syntax Error");
    }

  }
  const backspace = () => {
    setText(text.slice(0, text.length - 1));
  }
  return (
    <>
      <h1 className="heading">Calculator</h1>
      <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result} />
          <div className="row">
            <Button symbol="7" handleClick={addToText} />
            <Button symbol="8" handleClick={addToText} />
            <Button symbol="9" handleClick={addToText} />
            <Button symbol="/" handleClick={addToText} color="rgb(103, 215, 235)" />
          </div>
          <div className="row">
            <Button symbol="4" handleClick={addToText} />
            <Button symbol="5" handleClick={addToText} />
            <Button symbol="6" handleClick={addToText} />
            <Button symbol="*" handleClick={addToText} color="rgb(103, 215, 235)" />
          </div>
          <div className="row">
            <Button symbol="1" handleClick={addToText} />
            <Button symbol="2" handleClick={addToText} />
            <Button symbol="3" handleClick={addToText} />
            <Button symbol="+" handleClick={addToText} color="rgb(103, 215, 235)" />
          </div>
          <div className="row">
            <Button symbol="0" handleClick={addToText} />
            <Button symbol="." handleClick={addToText} />
            <Button symbol="=" handleClick={calculateResult} color="rgb(75, 189, 135)" />
            <Button symbol="-" handleClick={addToText} color="rgb(103, 215, 235)" />
          </div>
          <div className="row">
            <Button symbol="AC" handleClick={resetInput} color="rgb(243, 31, 66)" />
            <Button symbol="C" handleClick={backspace} color="rgb(243, 31, 66)" />
            <Button symbol="%" handleClick={addToText} color="rgb(103, 215, 235)" />
            <Button symbol="^" handleClick={addToText} color="rgb(103, 215, 235)" />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
