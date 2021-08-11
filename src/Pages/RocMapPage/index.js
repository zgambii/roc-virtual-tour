import React from 'react'
import ReactDOM from 'react-dom'
import RocMap from './component/RocMap'
import NavigationBar from '/Users/gambii/roc-virtual-tour/src/NavigationBar.js';

const RenderRocMapPage = () => { // SCREEN 1: has the rochester map plus other buttons /functions 
  
    return (
    <>
    {/* the google maps api call*/}
    <RocMap></RocMap> 
    <NavigationBar/>
    </>
   )
  
}

export default RenderRocMapPage;