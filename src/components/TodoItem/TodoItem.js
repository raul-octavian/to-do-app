
// import PropTypes from 'prop-types'
import './TodoItem.css'

const TodoItem = props => {
  return (
    <li className='todoItem glass--soft-dark'>
      <input type="checkbox" name="complete" id="complete" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veniam ea minima provident</p>
      <button className="button--no-text destructive-action" title="delete todo">
        X
      </button>
    </li>
  )
}

// TodoItem.propTypes = {}

export default TodoItem