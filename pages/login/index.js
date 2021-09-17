import React from "react";
import {
  Button,
  Paper,
  TextField,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import mainIcon from "../../public/images/fantasy.jpg";
import Image from "next/image";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const mainIconStyle = {
    width: "60%",
    height: "30%",
    margin: "10px 0px 50px",
  };
  const buttonStyle = {
    margin: "20px 0px 0px 0px",
  };
  const inputStyle = {
    margin: "20px 0px 0px 0px",
  };

  const errorStyle = {
    display: "none",
  };
  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Image src={mainIcon} alt="fuuuuuuuuuuuuck" style={mainIconStyle} />
        <Grid align="center">
          <h2>Open Legend Character Manager</h2>
        </Grid>
        <Alert severity="warning" style={errorStyle}>
          Wrong credentials!
        </Alert>
        <TextField
          laber="username"
          placeholder="Enter username"
          fullWidth
          required
          variant="outlined"
          style={inputStyle}
        />
        <TextField
          laber="Password"
          placeholder="Enter password"
          fullWidth
          required
          type="password"
          variant="outlined"
          style={inputStyle}
        />
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          style={buttonStyle}
        >
          Login
        </Button>

        <Typography>
          No account?
          <br />
          <Link href="#">Sign up adventurer</Link>
        </Typography>
        <br />
        <Link href="#">Forgot your password?</Link>
      </Paper>
    </Grid>
  );
};

export default Login;
