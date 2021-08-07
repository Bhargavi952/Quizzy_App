import React from "react";
import styles from "./Category.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Zoom } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    backgroundColor: "black",
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
    fontSize: "18px",
  },
}));

const CategoryCard = () => {
  const classes = useStyles();

  return (
    <div className={styles.categorycard_cont}>
     <div className={styles.categorycard_sub_cont}>
     <Grid
     className={styles.Grid}
        container
        spacing={2.5}
      >
        {[1, 2, 3, 4, 5, 6].map((item, id) => {
          return (
            <Grid key={id} item xs={4} sm={4} md={3} lg={6}>
              <Zoom>
                <Paper className={classes.paper}>
                  <img
                    className={styles.img}
                    src="https://via.placeholder.com/150"
                  />
                  <p className={classes.p}>{item}</p>
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
