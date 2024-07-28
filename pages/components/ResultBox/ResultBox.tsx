import React from 'react'

import styles from './ResultBox.module.css'

type Props={
  results: any[]
}

function ResultBox(props:Props) {

  return (
    <>
    <div className={styles.resultBoxContainer}>
      ResultBox
      {props.results.map((r) => {
        return <div>{r.name}</div>
      })}
    </div>
    </>
  )
}

export default ResultBox