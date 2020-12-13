import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

export default function ButtonAppBar() {

  return (
    <div className="flex-grow-1">
      <AppBar position="static" className="">
        <Toolbar>
          <Typography variant="h6" className="flex-grow-1 tl">
            <Link to="/" className="color-nav-bar b no-underline">Whatever</Link>
          </Typography>
          <Link to="/" className="color-nav-bar b no-underline">Início</Link>
          <Link to="/Movies" className="ml3 color-nav-bar b no-underline"><div>Filmes</div></Link>
          <Link to="/Series" className="ml3 color-nav-bar b no-underline">Séries</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}