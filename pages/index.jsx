import { useState } from 'react';
import produce from 'immer';

const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {

  const initialData = [{text: "hiho"}, {text: "howdy-do"}];

  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim();
    if (text) {
      const nextState = produce(data, draftState => {
        draftState.push({ text });
      });
      document.querySelector('#noteinput').value = '';
      setData(nextState);
    }
  }


  return (
    <>

    <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter new note" />

    <button onClick={() => handleClick()}> Add note </button>
  <Notes data={data} />
  </>
  )
}