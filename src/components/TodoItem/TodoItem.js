
// import PropTypes from 'prop-types'
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlay } from '@fortawesome/free-solid-svg-icons'


const TodoItem = ({ todo }) => {

  let checked

  if (todo.status != 2) {
    checked = false
  } else {
    checked = true
  }


  return (
    <li className='todoItem glass--soft-dark'>
      <button title="Start" className="button__play" htmlFor="complete">
        <input type="checkbox" name="complete" id="complete" defaultChecked={checked} />
      </button>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>

      {/* add these classes programmatically based in the status
        button__pause 
        button__complete
      */}
      <button title="Start" className="button__play" >
        <FontAwesomeIcon icon={faPlay} /><span>Start</span>
      </button>
      <button className="button--no-text destructive-action button--float-right" title="delete todo">
        <FontAwesomeIcon icon={faTrash} />
      </button>

    </li>
  )
}

// TodoItem.propTypes = {}

export default TodoItem