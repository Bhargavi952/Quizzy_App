import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/logo.png";
import {Link} from 'react-router-dom'
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className={styles.navbar_cont}>
      <div className={styles.navbar_left_cont}>
        <img width="70px" src={logo} alt="Logo" />
      </div>
      <div className={styles.navbar_right_cont}>
         <Button variant="contained" color="primary" >
         <Link className={styles.link} to='/login' >
          Login
          </Link>
         </Button>
          <Button variant="outlined">
          <Link  className={styles.link} to='/register' >
          Register
          </Link> 
          </Button>
          <Button variant="outlined" >
          <Link  className={styles.link} to='/profile' >
            User
        </Link>
          </Button>
         
      </div>

    </div>
  );
};

export default Navbar;
