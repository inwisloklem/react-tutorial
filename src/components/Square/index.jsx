import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.sass'

export default function Square ({ value, onClick }) {
  return (
    <button
      className={styles.square}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.any
}
