import React from 'react'
import styles from './Profile.module.css'

const ScoreCard = () => {
    return (
        <div className={styles.scoreCard_cont}>
            <h4>{"Science"}</h4>
            <h4>{"100"} Mark</h4>
            <h4>{"80"} Mark</h4>
        </div>
    )
}

export default ScoreCard
