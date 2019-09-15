import React, { useState } from 'react';
import { Modal, withStyles } from '@material-ui/core';
import MaterialTable from 'material-table';
import tableIcons from './constants/icons';
import { Details as DetailsIcon } from '@material-ui/icons';

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

const App = ({ classes }) => {
  const [open, setOpen] = React.useState(false);

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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);
