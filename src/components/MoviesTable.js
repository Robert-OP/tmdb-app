import React, { useCallback, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import MaterialTable from 'material-table';

import { Details as DetailsIcon } from '@material-ui/icons';
import tableIcons from '../constants/icons';

import { fetchMovies } from '../data/movies';

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

const columns = [
  { title: 'ID', field: 'id' },
  { title: 'Title', field: 'title' },
  { title: 'Release', field: 'release' }
];

// const data = [
//   {
//     id: '1',
//     title: 'Test 1',
//     release: '2019-11-10'
//   },
//   {
//     id: '2',
//     title: 'Test 2',
//     release: '2019-10-15'
//   }
// ];

const MoviesTable = ({ openModal }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const docs = await fetchMovies();
      setMovies(docs);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    return () => console.log('unmount table');
  }, []);

  return (
    <MaterialTable
      title="Movie List"
      actions={[
        {
          icon: () => <DetailsIcon />,
          tooltip: 'Details',
          onClick: (e, rowData) => openModal(rowData)
        }
      ]}
      columns={columns}
      data={movies}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
    />
  );
};

export default withStyles(styles, { withTheme: true })(MoviesTable);
