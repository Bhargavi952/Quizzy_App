import React,{useRef} from "react";
import styles from "./Category.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Zoom } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {saveData,loadData} from "../../LocalStorage/localstorage"
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    backgroundColor: "black",
    boxShadow: "rgba(136, 138, 136, 0.85) 0px 5px 15px",
    width: "70%",
    border: "none",
    marginTop: "10px",
    [theme.breakpoints.down('sm')]: {
        width: "50%"
      },
    "&:hover": {
      transform: "scale(0.9)",
      transition: " 0.3s ease-in-out",
      cursor: "pointer",
    },
  },
  p: {
    textAlign: "center",
    fontWeight: "600",
    color: "#01bf71",
    fontSize: "24px",
  },
}));

const CategoryCard = ({data}) => {
  const classes = useStyles();
 
  let userId = useSelector(state=>state.auth.userId)
  console.log(data);
  const history = useHistory();
  const handleClick = async(id)=>{
    let payload={
      category:id
    }
   let res= await axios.patch(`http://localhost:4000/user/${userId}`,payload)
   console.log(res)
   saveData("categoryId",id)
   history.push("/questions")

  }

  return (
    <div className={styles.categorycard_cont}>
     <div className={styles.categorycard_sub_cont}>
     <Grid
     className={styles.Grid}
        container
        spacing={2.5}
      >
        {data&&data.map((item, id) => {
          return (
            
            <Grid  key={id} item xs={4} sm={4} md={3} lg={6}>
              <Zoom>
                <Paper className={classes.paper}>
                <div onClick={()=>handleClick(item._id)}>
                  <img
                    className={styles.img}
                    src={item.url}
                  />
                  </div>
                  <p className={classes.p}>{item.title}</p>
                </Paper>
              </Zoom>
            </Grid>
           
          );
        })}
      </Grid>
     </div>
    </div>
  );
};

export default CategoryCard;
