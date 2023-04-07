import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote, updateNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Stack from 'react-bootstrap/Stack';
import "./notes.css";

export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editNote, setEditNote] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');
  const AddedDate = new Date().toLocaleDateString();


  const handleEdit = (note, index) => {
    setEditNote({ note, index });
    setUpdatedTitle(note.title);
    setUpdatedContent(note.content);
  };

  const handleUpdate = () => {
    dispatch(
      updateNote(editNote.index, updatedTitle, updatedContent)
    );
    setEditNote(null);
  };

  return (
    <>
      <button
        className="button-29"
        role="button"
        onClick={() => navigate('/')}
      >
        Home
      </button>
      <div className="d-flex">
        {notes.map((note, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{ width: '18rem', margin: '2rem' }}
            >
              <div className="card-body">
                {editNote && editNote.index === index ? (
                  <>
                    <input
                      type="text"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <textarea
                      value={updatedContent}
                      onChange={(e) => setUpdatedContent(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    <p className="card-text">Added Date:- {AddedDate}</p>
                    <Stack direction="horizontal" gap={4}>
                    <a href="#" onClick={() => dispatch(removeNote(index))}>
                      <FaTrashAlt />
                    </a>
                    
                    <a href="#" onClick={() => handleEdit(note, index)}>
                      <FaEdit />
                    </a>
                    </Stack>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
