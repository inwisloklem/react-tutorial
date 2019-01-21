import React, { useState, useCallback } from 'react'
import Board from '../Board'
import calculateWinner from '../../helpers/calculateWinner'
import styles from './index.module.sass'

export default function Game () {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }])
  const [moveNumber, setMoveNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const jumpTo = move => {
    setHistory(history.slice(0, move + 1))
    setMoveNumber(move)
    setXIsNext(move % 2 === 0)
  }

  const handleClick = i =>
    useCallback(() => {
      const current = history[history.length - 1]
      const squares = [...current.squares]

      if (calculateWinner(squares) || squares[i]) {
        return
      }

      squares[i] = xIsNext ? 'X' : 'O'

      setHistory([...history, { squares }])
      setMoveNumber(history.length)
      setXIsNext(!xIsNext)
    })

  const current = history[moveNumber]
  const winner = calculateWinner(current.squares)

  const moves = history.map((_, move) => {
    const desc = move
      ? `Go to move #${move}`
      : 'Go to start'

    return (
      <button
        className={styles.moveListBtn}
        key={move}
        onClick={() => jumpTo(move)}
      >
        {desc}
      </button>
    )
  })

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className={styles.gameInfo}>
        <div className={styles.status}>
          {winner ? 'Winner:' : 'Next player:'} <strong>{winner !== null ? winner : xIsNext ? 'X' : 'O'}</strong>
        </div>
        <ol className={styles.moveList}>
          {moves}
        </ol>
      </div>
    </div>
  )
}
