import React from 'react'
import styles from '../styles/Card.module.css'
const card = () => {
  return (
    <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Button Link text</button>
    </div>
  )
}

export default card