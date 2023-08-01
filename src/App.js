import React from "react";
import { useState } from "react";

function App() {
  // initiating state
  const [stateValue, setStateValue] = useState("");
 
  // setting operators
  const ops = ["/", "*", "+", "-", "."];

  // performing the calculations and updating the state
function getValue(value) {
  const operatorPattern = /[+\-*/]/;
  if (stateValue === "" && value === "0") {
    return;
  }
  
  if (value === ".") {
    const parts = stateValue.split(operatorPattern);
    if (parts[parts.length - 1].includes(".")) {
      return;
    }
  }

  if (value !== "-" && operatorPattern.test(value)) {
    const lastChar = stateValue[stateValue.length - 1] || "";
    const secondLastChar = stateValue[stateValue.length - 2] || "";
    if (operatorPattern.test(lastChar)) {
      if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
        setStateValue(stateValue.slice(0, -2) + value);
        return;
      }
      setStateValue(stateValue.slice(0, -1) + value);
      return;
    }
  }
  setStateValue(stateValue + value);
};

// carrying out the calculations
function cal() {
  setStateValue(eval(stateValue).toString());
};

// implementing the backspace functionality
function delValue() {
  if (stateValue === "") {
    return;
  };

  const value = stateValue.slice(0, -1);
  setStateValue(value);
};

// handling the clear event
function clearDisplay() {
  setStateValue("");
}

// console.log(stateValue)



  return (
    <div className="container">
      <div className="text-center">
        <h3>Calculator designed</h3>
        <span>By <a href="https://github.com/D-souz/calculator">D'souz</a></span>
        <div className="container bg-dark col-4 mt-5 text-center" id="cal">
          <div className="row" id="display-screen">
            {/* <div className="fomulaScreen align-right">expression</div> */}
            <div id="display" className="align-right"> {stateValue || "0"}</div>
          </div>
          <div className="row">
                <button className=" p-3 col-6" id="clear" onClick={clearDisplay}>AC</button>
                <button className=" p-3 col-3" id="divide" onClick={ () => {getValue('/')}}>/</button>
                <button className=" p-3 col-3" id="multiply" onClick={ () => {getValue('*')}}>*</button>  
          </div>
        <div className="row">
                <button className=" p-3 col-3" id="seven" onClick={ () => {getValue('7')}}>7</button>
                <button className=" p-3 col-3" id="eight" onClick={ () => {getValue('8')}}>8</button>
                <button className=" p-3 col-3" id="nine" onClick={ () => {getValue('9')}}>9</button>
                <button className=" p-3 col-3" id="subtract" onClick={ () => {getValue('-')}}>-</button>  
          </div>
        <div className="row">
                <button className=" p-3 col-3" id="four" onClick={ () => {getValue('4')}}>4</button>
                <button className=" p-3 col-3" id="five" onClick={ () => {getValue('5')}}>5</button>
                <button className=" p-3 col-3" id="six" onClick={ () => {getValue('6')}}>6</button>
                <button className=" p-3 col-3" id="add" onClick={ () => {getValue('+')}}>+</button>  
          </div>
        <div className="row">
                <button className=" p-3 col-3" id="one" onClick={ () => {getValue('1')}}>1</button>
                <button className=" p-3 col-3" id="two" onClick={ () => {getValue('2')}}>2</button>
                <button className=" p-3 col-3" id="three" onClick={ () => {getValue('3')}}>3</button>
                <button className=" p-3 col-3" id="decimal" onClick={() => {getValue('.')}}>.</button>
          </div>
          <div className="row">
                <button className=" p-3 col-3" id="zero" onClick={ () => {getValue('0')}}>0</button> 
                <button className=" p-3 col-3 " id="del" onClick={delValue}><i class="bi bi-backspace"></i></button> 
                <button className=" p-3 col-6" id="equals" onClick={cal}>=</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
