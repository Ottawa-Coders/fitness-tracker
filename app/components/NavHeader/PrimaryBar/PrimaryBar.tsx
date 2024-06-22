import React from 'react'
import Link from 'next/link'

import styles from './PrimaryBar.module.css'

const PrimaryBar = (props) => {

  return (
    <div className={styles.primaryBarContainer}>
      <div className={styles.primaryBarContent}>
        <div className={styles.primaryBarLinkContainer + ' ' + (props.primary == 'home' ? styles.active : '')}>
          <Link href='/home'>Home</Link>
        </div>
        <div className={styles.primaryBarLinkContainer + ' ' + (props.primary == 'food' ? styles.active : '')}>
          <Link href='/food'>Food</Link>
        </div>
        <div className={styles.primaryBarLinkContainer + ' ' + (props.primary == 'exercise' ? styles.active : '')}>
          <Link href='/exercise'>Excercise</Link>
        </div>
        <div className={styles.primaryBarLinkContainer + ' ' + (props.primary == 'report' ? styles.active : '')}>
          <Link href='/report'>Report</Link>
        </div>
      </div>
    </div>
  )
}

export default PrimaryBar