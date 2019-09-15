import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  CardContent,
  Card,
  TextField,
  withStyles
} from '@material-ui/core';

const styles = {
  avatar: {
    margin: 'auto',
    width: 60,
    height: 60
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
};

const Login = ({ classes }) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    console.log('mount login');
    return () => console.log('unmount login');
  }, []);

  return (
    <Card>
      <CardContent>
        <form className={classes.container}>
          <Avatar alt="TMDB" src="tmdb-logo.svg" className={classes.avatar} />

          <TextField
            id="outlined-username"
            label="Username"
            value={values.username}
            onChange={handleChange('username')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password"
            label="Password"
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
            variant="outlined"
          />
          <div className={classes.buttons}>
            <Button onClick={() => console.log('register')}>Register</Button>
            <Button
              // disabled={!isValid}
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => console.log('login')}
            >
              LOGIN
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
