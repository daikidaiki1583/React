import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewNoteInput } from './NewNoteINput';
import { NotesState } from './noteReducer'
import {addNote} from './actrion';

function App() {
  const notes = useSelector<NotesState,NotesState["notes"]>((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
    console.log(notes)
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
