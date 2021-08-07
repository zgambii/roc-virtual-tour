import React from 'react';
import logo from './logo.svg';
//import './App.css';
import RocMap from './Pages/RocMapPage/component/RocMap'
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
//import RestoreIcon from '@material-ui/icons/Restore';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map'; 
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function App(props) { // CONSTANT: serves as the navigation bar for the web app 
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
    value={value} 
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={classes.root}
  >
    <BottomNavigationAction label="Map" icon={<MapIcon />} />
    <BottomNavigationAction label="People" icon={<PersonIcon/>} />
    {/* <BottomNavigationAction label="" icon={<MapIcon />} /> */}
  </BottomNavigation>
  );
}

export default App;
