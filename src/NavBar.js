import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function ButtonAppBar() {

  return (
    <div className="flex-grow-1">
      <AppBar position="static" className="">
        <Toolbar>
          <Link to="/"><HomeIcon className="home-icon" /> </Link>
          <Typography variant="h6" className="flex-grow-1">
            Whatever
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}