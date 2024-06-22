import React from 'react'
import Link from 'next/link'

import styles from './PrimaryBar.module.css'

const PrimaryBar = (props) => {

  return (
    <div className={styles.primaryBarContainer}>
      <div className={styles.primaryBarContent}>
        <Link href='/home' className={styles.primaryBarLink + ' ' + (props.primary == '/home' ? styles.active : '')}>
            Home
        </Link>
        <Link href='/food' className={styles.primaryBarLink + ' ' + (props.primary == '/food' ? styles.active : '')}>
            Food
        </Link>
        <Link href='/report' className={styles.primaryBarLink + ' ' + (props.primary == '/report' ? styles.active : '')}>
            Report
        </Link>
      </div>
    </div>
  )
}

export default PrimaryBar