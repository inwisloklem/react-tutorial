import React from 'react'
import PropTypes from 'prop-types'
import Square from '../Square'
import styles from './index.module.sass'

export default function Board ({ squares, onClick }) {
  const renderSquares = squares.map((square, i) => {
    return <Square
      value={square}
      key={i}
      onClick={onClick(i)}
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
