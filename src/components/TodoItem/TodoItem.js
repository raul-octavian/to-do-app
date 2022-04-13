
// import PropTypes from 'prop-types'
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from 'react-router-dom'
import { uri } from '../../Utils/Uri'
import { useState } from 'react'


const TodoItem = ({ todo }) => {

  // get user information from context

  const [userInfo] = useOutletContext()
  const [error, setError] = useState()

  // set checked status on checkbox

  let checked

  if (todo.status != 2) {
    checked = false
  } else {
    checked = true
  }


  // delete toto

  const deleteTodo = async () => {

    try {
      const response = await fetch(
        `${uri}todo/${userInfo._id}/${todo._id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': userInfo.token,
            Connection: 'keep-alive'
          }
        }
      )
      const data = await response.json()

      if (data.message) {
        setError(data.errorE)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  // update todo status 

  const updateTodoStatus = async () => {

    let payload = todo.status == 0 ? { status: 1 } : { status: 0 }
    console.log('update runs', payload)

    try {
      const response = await fetch(
        `${uri}todo/${userInfo._id}/${todo._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': userInfo.token,
            Connection: 'keep-alive'
          },
          body: JSON.stringify(
            payload
          )
        }
      )
      const data = await response.json()

      if (data.message) {
        setError(data.error)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <li className='todoItem glass--soft-dark'>
      <button title="Start" className="button__play" htmlFor="complete">
        <input type="checkbox" name="complete" id="complete" defaultChecked={checked} />
      </button>
      <div className='todoItem__content'>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>

      {/* add these classes programmatically based in the status
        button__pause 
        button__complete
      */}
      <button title="Start" className="button__play" onClick={updateTodoStatus}>
        <FontAwesomeIcon icon={faPlay} /> <span>Start</span>
      </button>
      <button className="button--no-text destructive-action button--float-right" title="delete todo" onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      {error && (<p>error</p>)}

    </li>
  )
}

// TodoItem.propTypes = {}

export default TodoItem