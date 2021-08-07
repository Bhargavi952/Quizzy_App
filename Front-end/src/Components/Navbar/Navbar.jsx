import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {saveData,loadData} from "../../LocalStorage/localstorage"
import {SignOut} from "../../Redux/Auth/action"
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  let dispatch = useDispatch()
  console.log(isAuth)
  
  const handleLogOut=()=>{
   dispatch(SignOut())
  }

 
  return (
    <div className={styles.navbar_cont}>
      <div className={styles.navbar_left_cont}>
        <img width="70px" src={logo} alt="Logo" />
      </div>
      <div className={styles.navbar_right_cont}>
        {isAuth ? (
          <Button onClick={handleLogOut} variant="contained" color="primary">
            <Link  className={styles.link} to="/">
              LOG OUT
            </Link>
          </Button>
        ) : (
          <Button variant="contained" color="primary">
            <Link className={styles.link} to="/login">
              LOG IN
            </Link>
          </Button>
        )}

        <Button variant="outlined">
          <Link className={styles.link} to="/register">
            Register
          </Link>
        </Button>
        <Button variant="outlined">
          <Link className={styles.link} to="/profile">
            User
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
