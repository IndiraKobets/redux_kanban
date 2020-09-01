import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Board from "./Board";

function App() {


    return (
        <div className="App">
            <Board/>

        </div>
    );
}

export default connect()(App);
