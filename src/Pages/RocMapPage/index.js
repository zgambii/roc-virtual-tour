import React from 'react'
import ReactDOM from 'react-dom'
import RocMap from './component/RocMap'
import App from '/Users/chinedu.ndukauba/Desktop/Development/roc-virtual-tour/src/App.js';


const RenderRocMapPage = () => { // SCREEN 1: has the rochester map plus other buttons /functions 
  
    return (
    <>
    {/* the google maps api call*/}
    <RocMap></RocMap> 
    <App/>
    </>
   )
  
}

export default RenderRocMapPage;