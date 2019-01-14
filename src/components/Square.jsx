import React from 'react'
import PropTypes from 'prop-types'

function Square (props) {
  return (
    <button
      className='square'
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.any
}

export default Square
