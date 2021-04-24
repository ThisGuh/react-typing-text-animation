import React from 'react'
import styles from '../../styles.module.css'

function Cursor({ cursorDuration }) {
  const cursorDurationStyle = {
    animationDuration: cursorDuration
  }
  return (
    <span style={cursorDurationStyle} className={styles.cursor}>
      |
    </span>
  )
}

export default Cursor
