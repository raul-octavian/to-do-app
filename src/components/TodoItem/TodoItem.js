
// import PropTypes from 'prop-types'
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlay, faPause, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from 'react-router-dom'
import { uri } from '../../Utils/Uri'
import { useState } from 'react'


const TodoItem = ({ todo }) => {

  // get user information from context

  const [userInfo] = useOutletContext()
  const [error, setError] = useState("")

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

  const updateTodoStatus = async (complete) => {
    let payload
    if (!complete) {
      payload = todo.status == 0 ? { status: 1 } : { status: 0 }
    } else {
      payload = todo.status != 2 ? { status: 2 } : { status: 0 }
    }
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

  // set the button states, Start, pause and complete.

  let button;

  if (todo.status == 0) {
    button = <button title="Start" className="button__play" onClick={() => updateTodoStatus(false)}>
      <FontAwesomeIcon icon={faPlay} /> <span>Start</span>
    </button>
  } else if (todo.status == 1) {
    button = <button title="Start" className="button__pause" onClick={() => updateTodoStatus(false)}>
      <FontAwesomeIcon icon={faPause} /> <span>Pause</span>
    </button>
  } else {
    button = <button title="Start" className="button__complete">
      <FontAwesomeIcon icon={faCheck} /> <span>Complete</span>
    </button>
  }

  // set the edit state

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description)


  //update todo values

  const updateTodo = async (payload) => {
    let key = Object.keys(payload)[0]
    if (payload[key] != todo[key]) {
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

  }

  //stop propagation on click

  const setEditValue = (e) => {
    e.stopPropagation();
    setEdit(!edit)
  }

  return (
    <li className='todoItem glass--soft-dark' onClick={() => setEdit(false)}>
      <button title="Start" className="button__play" htmlFor="complete">
        <input type="checkbox" name="complete" id="complete" defaultChecked={checked} onChange={() => updateTodoStatus(true)} />
      </button>
      <div className='todoItem__content'>
        {!edit ?
          <h3>
            {title}
          </h3>
          :
          <input type="text" name="name" id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => updateTodo({ title: title })} />}

        {!edit ?
          <p>{todo.description}</p>
          :
          <textarea type="text" name="name" id="name"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => updateTodo({ description: description })} ></textarea>}
      </div>

      {button}
      <button className="button--no-text constructive-action button--float-right" title="edit todo" onClick={(e) => setEditValue(e)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className="button--no-text destructive-action button--float-right" title="delete todo" onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      {error && (<p>error</p>)}

    </li >
  )
}

// TodoItem.propTypes = {}

export default TodoItem