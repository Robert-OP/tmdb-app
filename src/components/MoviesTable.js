import React from 'react';
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
  },
  paper: {
    top: '40%',
    left: '40%',
    position: 'absolute',
    width: 400,
    backgroundColor: '#FFFFFF',
    border: '2px solid #000'
  }
};

const columns = [
  { title: 'ID', field: 'id' },
  { title: 'Title', field: 'title' },
  { title: 'Genres', field: 'genres' },
  { title: 'Release', field: 'release' }
];

const data = [
  {
    id: '1',
    title: 'Noob',
    genres: 'Thriller, Mistery',
    release: '10.10.2019'
  },
  {
    id: '2',
    title: 'Noob',
    genres: 'Thriller, Mistery',
    release: '10.10.2019'
  }
];

const MoviesTable = ({ classes, openModal }) => {
  return (
    <MaterialTable
      title="Movie List"
      actions={[
        {
          icon: () => <DetailsIcon />,
          tooltip: 'Details',
          onClick: (e, rowData) => openModal(e, rowData)
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
