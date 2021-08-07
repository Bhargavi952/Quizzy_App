import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from "react-redux"
import { SignIn } from '../../Redux/Auth/action';

import { useHistory } from "react-router"

import styles from './Login.module.css'
import logo from "../../Images/logo.png";
import Socialmedia from '../Footer/Socialmedia';


const useStyles = makeStyles((theme) => ({
    root:{
      marginTop:"145px",
        boxShadow: "rgba(10, 10, 10, 0.35) 0px 5px 15px",
        borderRadius: "30px",
        minHeight:"380px",
        // backgroundImage: "linear-gradient(270deg, #43264e 0, #da234a 72%)"
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "10px",
    // backgroundImage: "linear-gradient(270deg, #43264e 0, #da234a 72%)"
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {isAuth} = useSelector(state=>state.auth)
  const history = useHistory()
  let dispatch = useDispatch()

  if(isAuth){
    history.push("/")
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(SignIn({email,password}))
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
          Log In
        </Typography>
        <form  className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="secondary"
            onClick={handleLogin}
          >
         Log In
          </Button>
          <Grid container>
            <Grid item >
              <a href="/register" variant="body2">
                {"Don't have an account? Register"}
              </a>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
    <Socialmedia/>
    </>
  );
}
