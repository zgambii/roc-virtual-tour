import React from 'react'
import ReactDOM from 'react-dom';
import '/Users/gambii/roc-virtual-tour/src/NavigationBar.css';
import '../styles.css'

function RocMap(props) {
    return (
      <div className="my-div">
        <header>
          This is the Header (can more then likely be its own component)
        </header>
          {/* <img src={logo} className="NavigationBar-logo" alt="logo" /> */}
          <p>
            Edit <code>src/NavigationBar.js</code> and save to reload.
          </p>
          <a
            className="NavigationBar-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Map, {props.name}!
          </a>
 
      </div>
    );
  }
  
  export default RocMap;
