import React, { useEffect, useState } from 'react';
import { Modal, withStyles } from '@material-ui/core';
import { fetchMovie } from '../data/movies';

const styles = {
  root: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 'calc(10px + 2vmin)'
  },
  paper: {
    width: 400,
    backgroundColor: '#FFFFFF',
    border: '2px solid #000'
  }
};

const MovieModal = ({ classes, handleClose, open, movie }) => {
  const [movieDetails, setDetails] = useState({
    name: 'Movie Title',
    overview: 'Overview',
    popularity: 'Popularity',
    voteAverage: 0,
    voteCount: 0,
    status: 'Status',
    poster: 'Poster',
    genres: 'Genres',
    language: 'Language'
  });

  const {
    name,
    overview,
    popularity,
    voteAverage,
    voteCount,
    status,
    poster,
    genres,
    language
  } = movieDetails;

  useEffect(() => {
    console.log('mount modal', movie);

    // const movieDetails = await fetchMovie({ id });
    // setDetails(movieDetails);

    return () => console.log('unmount modal');
  }, []);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
      className={classes.root}
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">
          {name} + {popularity}
        </h2>
        <p id="simple-modal-description">{genres}</p>
        <p id="simple-modal-description">{overview}</p>
        <p id="simple-modal-description">
          Count: {voteCount} + Average: {voteAverage}
        </p>
        <p id="simple-modal-description">{status}</p>
        <p id="simple-modal-description">{language}</p>
        <p id="simple-modal-description">{poster}</p>
      </div>
    </Modal>
  );
};

export default withStyles(styles, { withTheme: true })(MovieModal);
