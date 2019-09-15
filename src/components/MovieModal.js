import React, { useCallback, useEffect, useState } from 'react';
import { Fab, Modal, withStyles } from '@material-ui/core';
import { fetchMovie } from '../data/movies';

import { Close as CloseIcon } from '@material-ui/icons';

const styles = {
  root: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 'calc(10px + 1vmin)'
  },
  fab: {
    display: 'flex'
  },
  paper: {
    backgroundColor: '#FFFFFF',
    border: '2px solid #000',
    padding: '8px 8px'
  }
};

const MovieModal = ({ classes, handleClose, open, movie }) => {
  const [movieDetails, setDetails] = useState({
    title: 'Movie Title',
    overview: 'Overview',
    popularity: 'Popularity',
    voteAverage: 0,
    voteCount: 0,
    status: 'Status',
    poster: null,
    genres: 'Genres',
    language: 'Language'
  });

  const {
    title,
    overview,
    popularity,
    voteAverage,
    voteCount,
    status,
    poster,
    genres,
    language
  } = movieDetails;

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchMovie({ id: movie.id });
      setDetails(data);
    } catch (error) {
      console.error(error);
    }
  }, [movie]);

  useEffect(() => {
    fetchData();
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
        <Fab className={classes.fab} onClick={handleClose}>
          <CloseIcon />
        </Fab>
        <h4 id="movie-title">{title}</h4>
        {poster && (
          <img
            alt="movie-poster"
            src={`https://image.tmdb.org/t/p/w92/${poster}`}
          />
        )}
        <p id="movie-stats">
          Popularity: {popularity} | Count: {voteCount} | Average: {voteAverage}
        </p>
        <p id="movie-details">
          Genres: {genres} | Status: {status} | Language: {language}
        </p>
        <p id="movie-overview" style={{ textAlign: 'justify' }}>
          {overview}
        </p>
      </div>
    </Modal>
  );
};

export default withStyles(styles, { withTheme: true })(MovieModal);
