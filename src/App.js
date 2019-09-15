import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';

import MovieModal from './components/MovieModal';
import MoviesTable from './components/MoviesTable';

// import { loginUser } from './data/authentication';

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('mount app');

    // loginUser({ id: 'admin', password: 'webapi' });

    return () => console.log('unmount');
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = (rowData, e) => {
    console.log('Details Modal', rowData, e);
    handleOpen();
  };

  return (
    <div className={classes.root}>
      <h1>TMDB</h1>
      <MoviesTable openModal={openModal} />
      <MovieModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);
