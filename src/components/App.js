import React from 'react';
import { useReducer } from 'react';
import reducer, { initialState} from './../reducers/index';
import { applyNumber, opChanger, clearDisplay, mPlus, mrAction, mcAction} from './../actions/index';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const eventHandler = (num) => {
    dispatch(applyNumber(num));
  }

  const opHandler = (op) => {
    dispatch(opChanger(op));
  }

  const clearHandler = () => {
    dispatch(clearDisplay());
  }

  const mPlusHandler = () => {
    dispatch(mPlus());
  }

  const mrHandler = () => {
    dispatch(mrAction());
  }

  const mcHandler = () => {
    dispatch(mcAction());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={mPlusHandler} value={"M+"}/>
              <CalcButton onClick={mrHandler} value={"MR"}/>
              <CalcButton onClick={mcHandler} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {eventHandler(1)}} value={1}/>
              <CalcButton onClick={() => {eventHandler(2)}} value={2}/>
              <CalcButton onClick={() => {eventHandler(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {eventHandler(4)}} value={4}/>
              <CalcButton onClick={() => {eventHandler(5)}} value={5}/>
              <CalcButton onClick={() => {eventHandler(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {eventHandler(7)}} value={7}/>
              <CalcButton onClick={() => {eventHandler(8)}} value={8}/>
              <CalcButton onClick={() => {eventHandler(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {opHandler("+")}} value={"+"}/>
              <CalcButton onClick={() => {opHandler("*")}}value={"*"}/>
              <CalcButton onClick={() => {opHandler("-")}}value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearHandler} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;