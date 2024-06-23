import React from 'react'
import AccountBar from './AccountBar/AccountBar'
import PrimaryBar from './PrimaryBar/PrimaryBar'
import SecondaryBar from './SecondaryBar/SecondaryBar'
import { NavHeaderProps } from '@/app/constants'

import styles from './NavHeader.module.css'
const NavHeader = (props: NavHeaderProps) => {
  return (
    <header className={styles.header}>
      <AccountBar />
      <PrimaryBar 
        primary={props.primary}
      />
      <SecondaryBar 
        secondary={props.secondary}
        secondaryTabs={props.secondaryTabs}
      />
    </header>
  )
}

export default NavHeader