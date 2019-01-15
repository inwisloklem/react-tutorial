import React, { useState, useCallback } from 'react'
import Square from '../Square'
import calculateWinner from '../../helpers/calculateWinner'
import styles from './Board.module.sass'

export default function Board () {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = i =>
    useCallback(() => {
      if (calculateWinner(squares) || squares[i]) {
        return
      }

      const newSquares = [...squares]
      newSquares[i] = xIsNext ? 'X' : 'O'

      setSquares(newSquares)
      setXIsNext(!xIsNext)
    })

  const renderSquare = i =>
    <Square
      value={squares[i]}
      onClick={handleClick(i)}
    />

  const winner = calculateWinner(squares)

  return (
    <div>
      <div className={styles.results}>
        {winner ? 'Winner:' : 'Next player:'} <strong>{winner !== null ? winner : xIsNext ? 'X' : 'O'}</strong>
      </div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
