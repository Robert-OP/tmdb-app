import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

import MovieModal from './components/MovieModal';
import MoviesTable from './components/MoviesTable';
import Login from './components/Login';

const styles = {
  root: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
};

const App = ({ classes }) => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({
    id: '1',
    name: 'None',
    genres: 'None',
    release: 'None'
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = async rowData => {
    setMovie(rowData);
    handleOpen();
  };

  return (
    <div className={classes.root}>
      {!auth ? (
        <>
          <h1>TMDB</h1>
          <MoviesTable openModal={openModal} />
          {open && (
            <MovieModal handleClose={handleClose} open={open} movie={movie} />
          )}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);
