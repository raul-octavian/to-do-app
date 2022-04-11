import React from 'react'
// import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = props => {
  return (
    <div className="container">
      <div className="todoList glass">
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    </div>
  )
}

// TodoList.propTypes = {}

export default TodoList