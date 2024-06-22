import React from 'react'

import styles from './SecondaryBar.module.css'

const SecondaryBar = (props) => {
  return (
    <div className={styles.secondaryBarContainer}>
      <div className={styles.secondaryBarContent}>
        <div className={styles.secondaryBarLinkContainer + ' ' + (props.secondary == 'overview' ? styles.active : '')}>
          <a>Overview</a>
        </div>
        <div className={styles.secondaryBarLinkContainer}>
          <a>Food</a>
        </div>
        <div className={styles.secondaryBarLinkContainer}>
          <a>Exercise</a>
        </div>
        <div className={styles.secondaryBarLinkContainer}>
          <a>Report</a>
        </div>
      </div>
    </div>
  )
}

export default SecondaryBar