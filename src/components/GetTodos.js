import React from 'react'
import PropTypes from 'prop-types'

const GetTodos = ({ onClick }) => {
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      Get them todos
    </a>
  )
}

GetTodos.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default GetTodos