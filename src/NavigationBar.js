import React from 'react';
import logo from './logo.svg';
import RocMap from './Pages/RocMapPage/component/RocMap'
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import MapIcon from '@material-ui/icons/Map'; 
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    
  },
});

function NavigationBar(props) { // CONSTANT: serves as the navigation bar for the web app 
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
    <BottomNavigationAction label="Resources" icon={<MapIcon />} /> 
  </BottomNavigation>
  );
}

export default NavigationBar;
