import React from 'react'
import PropTypes from 'prop-types'
import styles from './Square.module.sass'

export default function Square (props) {
  return (
    <button
      className={styles.square}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.any
}
