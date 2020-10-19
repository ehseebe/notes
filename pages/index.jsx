import { useState } from 'react';

const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {

  const initialData = [{text: "hiho"}, {text: "howdy-do"}];

  const [data, setData] = useState(initialData);


  return (
    <>

    <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter new note" />

    <button> Add note </button>
  <Notes data={data} />
  </>
  )
}