import React from 'react'
import PropTypes from 'prop-types'
import Square from '../Square'
import styles from './index.module.sass'

export default function Board (props) {
  const renderSquares = props.squares.map((square, i) => {
    return <Square
      value={square}
      key={i}
      onClick={props.onClick(i)}
    />
  })

  return (
    <div className={styles.board}>
      {renderSquares}
    </div>
  )
}

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.any
}
