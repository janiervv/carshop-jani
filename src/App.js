import React from 'react';
import './App.css';
import Carlist from './components/Carlist.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Jani's carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <div class="maincontainer">
    <Carlist />
    </div>
  </div>
  );
}

export default App;
