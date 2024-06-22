import React from 'react'

import styles from './AccountBar.module.css'

const AccountBar = () => {
  return (
    <div className={styles.accountBarContainer}>
      <div className={styles.accountBarContent}>
        <p className={styles.accountBarLogo}>fitnesstracker.</p>
        
        <div className={styles.accountBarLinksContainer}>
          <div className={styles.accountBarLinks}>
            <p>Hi,<a className={styles.accountBarUserName}>Daniel</a></p>
          </div>
          <div className={styles.accountBarLinks}>
            <a>Settings</a>
          </div>
          <div className={styles.accountBarLinks}>
            <a>Help</a>
          </div>
          <div className={styles.accountBarLinksLast}>
            <a>Logout</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountBar