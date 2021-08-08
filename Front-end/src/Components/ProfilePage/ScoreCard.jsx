import React from 'react'
import styles from './Profile.module.css'

const ScoreCard = ({item}) => {
    return (
        <div className={styles.scoreCard_cont}>
            <h4>{item.title}</h4>
            <h4>{"100"} Mark</h4>
            <h4>{"80"} Mark</h4>
        </div>
    )
}

export default ScoreCard
