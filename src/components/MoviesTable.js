import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import MaterialTable from 'material-table';

import { Details as DetailsIcon } from '@material-ui/icons';
import tableIcons from '../constants/icons';

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
  { title: 'Title', field: 'name' },
  { title: 'Genres', field: 'genres' },
  { title: 'Release', field: 'release' }
];

const data = [
  {
    id: '1',
    name: 'Noob 1',
    genres: 'Thriller, Mistery',
    release: '2019-11-10'
  },
  {
    id: '2',
    name: 'Noob 2',
    genres: 'Thriller, Mistery',
    release: '2019-10-15'
  }
];

const MoviesTable = ({ classes, openModal }) => {
  useEffect(() => {
    console.log('mount table');

    // const movieDetails = await fetchMovie({ id });
    // setMovie(movieDetails);

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
      data={data}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
    />
  );
};

export default withStyles(styles, { withTheme: true })(MoviesTable);
