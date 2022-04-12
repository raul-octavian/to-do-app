import { useState } from 'react'
import './NewTodo.css'
import { useOutletContext } from 'react-router-dom';
import { uri } from '../../Utils/Uri';

const NewTodo = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userInfo, setUserInfo] = useOutletContext();
  // console.log('new todo', userInfo)

  let error = ''

  const createTodo = async () => {
    try {
      const response = await fetch(`${uri}todo/create/${userInfo._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': userInfo.token
        },
        body: JSON.stringify({
          title,
          description
        })
      })
      const data = await response.json()

      if (!data._id) {
        error = data.error
      }
    } catch (err) {
      error = err.message
    }
  }

  let errorEl;

  if (error) {
    errorEl = <p>{error}</p>
  }


  return (
    <div className='container container__new-todo'>
      <div className='form form__new-todo glass'>
        <h2>New Todo</h2>
        {errorEl}
        <div className="input-container">
          <div className='input-section'>
            <label htmlFor="name">Title:</label>
            <input type="text" name="name" id="name" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='input-section'>
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <div className="actions-container">
          <button className='primary-action' onClick={createTodo}>Create</button>
        </div>

      </div>
    </div>
  )
}

export default NewTodo