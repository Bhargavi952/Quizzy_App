import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import logo from '../../Images/logo.png'
import styles from './Register.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "430px",
    boxShadow: "rgba(10, 10, 10, 0.35) 0px 5px 15px",
    borderRadius: "30px",
    backgroundColor:"rgb(230, 219, 227)",
    marginTop:"120px"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "10px",
  },
}));

export default function Register() {
  const classes = useStyles();
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const history = useHistory()

  const handleClick = async()=> {
    console.log(1)
   let data = await axios.post("http://localhost:4000/register",{
     first_name :firstName,
     last_name: lastName,
     email: Email,
     password: Password
    })
console.log(data.status)
    if(data.status==201){


      history.push("/login")

    }
 
  }

  return (
    <>
    <div className={styles.nav_profile_cont}>
        <img className={styles.img} width="70px" src={logo} alt="Logo" />
      </div>
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form  className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e)=>setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                onChange={(e)=>setLastName(e.target.value)}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
         
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
        <Button
       color="secondary"
          variant="contained"
           onClick={handleClick}
           fullWidth
            className={classes.submit}
          >
            Register
          </Button>
      </div>
    </Container>
    </>
  );
}
