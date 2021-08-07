import React, { useRef, useState } from "react";
import styles from './Profile.module.css'
import ScoreCard from "./ScoreCard";

const Profile = () => {
    const [displayImg, setDisplayImg] = useState("data:image/jpeg;base64,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");
    const [showButton,setShowButton] = useState(false)
    const inputRef = useRef();
    const handleAddFile = () => {
      console.log(inputRef.current.files);
      const img = URL.createObjectURL(inputRef.current.files[0]);
      setDisplayImg(img);
      setShowButton(!showButton)
    };
    const handleProfile = ()=>{
       setShowButton(!showButton)   
    }
    return (
        <div>
            <div className={styles.user_profile_cont}>
                <img className={styles.profile_img} onClick={handleProfile}  src={displayImg} alt="user" />
              <div className={showButton?styles.add_file:styles.add_file_disable}  >
              <input className={styles.input} ref={inputRef} type="file" />
                <button className={styles.addbtn} onClick={handleAddFile}>Add file</button>
              </div>
              <h1 style={{margin:"-10px"}} >{"Bhargavi"}  {"Shetty"}</h1>
              <h4>{"bhargavishetty113@gmail.com"}</h4>
              <h2>Total Score:{"100"}</h2>
              <div className={styles.scoreCard_heading}>
              <h4>{"Category Name"}</h4>
            <h4>{"Total Points"}</h4>
            <h4>{"Earned Points"}</h4>
              </div>
              <ScoreCard/>
              
               
            </div>
        </div>
    )
}

export default Profile
