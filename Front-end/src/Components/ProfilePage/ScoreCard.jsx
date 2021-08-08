import React from 'react'
import styles from './Profile.module.css'

const ScoreCard = ({item}) => {
    return (
        <div className={styles.scoreCard_cont}>
            <h4>{item.title}</h4>
            <h4>{"50"} Mark</h4>
            <h4>{item.Totalmarks} Mark</h4>
        </div>
    )
}

export default ScoreCard
