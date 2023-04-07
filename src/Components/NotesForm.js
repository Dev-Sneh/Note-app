import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';
import notebook from '../icon/notebookdark.gif';
import './notes.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Stack from 'react-bootstrap/Stack';

export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle('');
    setContent('');
    navigate('/allNotes');
  }
  return (
    <>
      <div className='header'>
        <img src={notebook} alt='Logo' height='50px' width='50px' />
        <h1>My Secrets</h1>
      </div>
      <div class="container">
        <div className='formContainer'>
          <h3>Secrets Notes App</h3>
          <form onSubmit={handleSubmission}>
            Title <br />
            <input type='text' name='title' value={title} placeholder='enter title' onChange={(e) => setTitle(e.target.value)} required /> <br />
            Content <br />
            {/* <input type='textarea' name='content' value={content} placeholder='enter content' onChange = {(e)=> setContent(e.target.value)} required/> <br/> */}
            <FloatingLabel controlId="floatingTextarea2" label="Write here:-">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here" onChange={(e) => setContent(e.target.value)} required
                style={{ height: 'auto', width: 'auto' }}
              />
            </FloatingLabel>
            <br />
            <Stack direction="horizontal" gap={3}>
              <button className="button-29" role="button">Add Note</button>
              <button className="button-29" role="button" onClick={() => navigate('/allNotes')}>Show Notes</button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}
