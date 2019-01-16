import React, { useState } from 'react'
import Board from '../Board'
import calculateWinner from '../../helpers/calculateWinner'
import styles from './index.module.sass'

export default function Game() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }])
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = i =>
    useCallback(() => {
      const current = history[history.length - 1]
      const squares = [...current.squares]

      if (calculateWinner(squares) || squares[i]) {
        return
      }

      squares[i] = xIsNext ? 'X' : 'O'

      setHistory([...history, squares])
      setXIsNext(!xIsNext)
    })

  const current = history[history.length - 1]
  const winner = calculateWinner(squares)

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className={styles.gameInfo}>
        <div>{winner ? 'Winner:' : 'Next player:'} <strong>{winner !== null ? winner : xIsNext ? 'X' : 'O'}</strong></div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
