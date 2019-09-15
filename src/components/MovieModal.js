import React from 'react';
import { Modal, withStyles } from '@material-ui/core';

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

const MovieModal = ({ classes, handleClose, open }) => {
  return (
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
  );
};

export default withStyles(styles, { withTheme: true })(MovieModal);
