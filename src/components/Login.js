import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  CardContent,
  Card,
  TextField,
  withStyles
} from '@material-ui/core';

const styles = {};

const Login = ({ classes }) => {
  useEffect(() => {
    console.log('mount login');

    // const movieDetails = await fetchMovie({ id });
    // setDetails(movieDetails);

    return () => console.log('unmount login');
  }, []);

  return (
    <Card>
      <CardContent>
        <div>avatar</div>
        <div>username</div>
        <div>password</div>
        <div>
          <Button style={{ marginRight: '5px' }}>Register</Button>
          <Button
            // disabled={!isValid}
            type="submit"
            color="primary"
            variant="contained"
          >
            LOGIN
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
