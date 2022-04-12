import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'
import NewTodo from '../NewTodo/NewTodo'
import './TodoList.css'
import { useOutletContext } from 'react-router-dom'
import { uri } from '../../Utils/Uri'

const TodoList = props => {

  const [userInfo] = useOutletContext()

  const [todos, setTodos] = useState([])



  useEffect(() => {
    let error = ''
    const getTodos = async () => {
      const response = await fetch(`${uri}todo/${userInfo._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': userInfo.token
          }
        })
      const data = await response.json()

      if (data.error) {
        error = data.error
        return
      }
      setTodos(data)
    }

    getTodos().catch(console.error)
  })



  return (

    <div className="container">
      <NewTodo />
      <div className="todoList glass">
        <ul>
          {todos.map(item => (
            <TodoItem key={item._id} todo={item} />
          ))}

        </ul>
      </div>
    </div>

  )
}

// TodoList.propTypes = {}

export default TodoList