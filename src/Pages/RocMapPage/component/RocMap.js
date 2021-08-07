import React from 'react'
import ReactDOM from 'react-dom';
import '/Users/chinedu.ndukauba/Desktop/Development/roc-virtual-tour/src/App.css';

function RocMap(props) {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Map, {props.name}!
          </a>
        </header>
      </div>
    );
  }
  
  export default RocMap;

// const RocMap = (props) => {
//     return (
//         <h1>React Map {props.name}</h1>
//     );
// }


// export default RocMap;