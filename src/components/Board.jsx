import React, { Component } from 'react'
import Square from './Square'
import calculateWinner from '../helpers/calculateWinner'

class Board extends Component {
  constructor (props) {
    super(props)

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick (i) {
    const squares = [...this.state.squares]

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare (i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  render () {
    const winner = calculateWinner(this.state.squares)

    return (
      <div>
        <div className='status'>
          {winner ? 'Winner:' : 'Next player:'} <strong>{winner !== null ? winner : this.state.xIsNext ? 'X' : 'O'}</strong>
        </div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
