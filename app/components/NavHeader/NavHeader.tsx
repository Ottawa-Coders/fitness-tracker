import React from 'react'
import AccountBar from './AccountBar/AccountBar'
import PrimaryBar from './PrimaryBar/PrimaryBar'
import SecondaryBar from './SecondaryBar/SecondaryBar'

import styles from './NavHeader.module.css'
const NavHeader = (props) => {
  return (
    <header className={styles.header}>
      <AccountBar />
      <PrimaryBar 
        primary={props.primary}
      />
      <SecondaryBar 
        secondary={props.secondary}
      />
    </header>
  )
}

export default NavHeader