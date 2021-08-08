import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { saveData, loadData } from "../../LocalStorage/localstorage";
import axios from "axios";
import { useHistory } from "react-router";
import styles from "./Question.module.css";
import Pagination from '@material-ui/lab/Pagination';

export const QuestionPage = () => {
  const history = useHistory();
  const [question, setQuestion] = useState("");
  const [page, setPage] = useState(1);
  let categoryId = loadData("categoryId");
  const getQuestions = async () => {
    let { data } = await axios.get(
      `http://localhost:4000/category/${categoryId}?page=${page}`
    );
    let x = data.data.questions[0];
    console.log(x);
    setQuestion(x);
    console.log(question);
  };
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getQuestions();
  }, [page]);

  function handleSubmit() {
    if (page >= 5) {
      history.push("/");
    }
    setPage((prev) => prev + 1);
    console.log(page);
  }

  return (
    <>
      <Navbar />
      <div className={styles.question_cont}>
        <h1>{question && question.title} </h1>
        <div className={styles.options} >
          <input
            onChange={(e) => setValue(e.target.value)}
            value={question && question.options.A}
            type="radio"
            name="ans"
            id=""
          />

          <h4>{question && question.options.A}</h4>
        </div>
        <div className={styles.options}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={question && question.options.B}
            type="radio"
            name="ans"
            id=""
          />

          <h4>{question && question.options.B}</h4>
        </div>
        <div  className={styles.options}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={question && question.options.C}
            type="radio"
            name="ans"
            id=""
          />

          <h4>{question && question.options.C}</h4>
        </div>
        <div  className={styles.options}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={question && question.options.D}
            type="radio"
            name="ans"
            id=""
          />

          <h4>{question && question.options.D}</h4>
        </div>
        <br />
        <button className={styles.btn} onClick={handleSubmit}>Submit</button>
        <Pagination
         variant="outlined"
         className={styles.pagination}
        count={5}
        page={page}
        onChange={handleChange}
      />
      </div>
    </>
  );
};
